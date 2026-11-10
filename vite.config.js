import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { parseResume } from './scripts/parse-resume.mjs'

// The website's content comes from the LaTeX resume, so the resume and the site
// can never disagree. This plugin exposes the parsed result as the virtual module
// "virtual:resume-data". If master_resume.tex cannot be parsed the build FAILS
// (rather than deploying a broken site). Edits to either .tex file hot-reload
// in `npm run dev`.
const MASTER_RESUME = fileURLToPath(new URL('./resume/master_resume.tex', import.meta.url))
const PROFILE = fileURLToPath(new URL('./shared/profile.tex', import.meta.url))

function resumeData() {
  const id = 'virtual:resume-data'
  const resolvedId = '\0' + id

  return {
    name: 'resume-data',
    resolveId(source) {
      if (source === id) return resolvedId
    },
    load(loadedId) {
      if (loadedId !== resolvedId) return
      this.addWatchFile(MASTER_RESUME)
      this.addWatchFile(PROFILE)
      const data = parseResume(
        readFileSync(MASTER_RESUME, 'utf8'),
        readFileSync(PROFILE, 'utf8'),
      )
      return `export default ${JSON.stringify(data)}`
    },
    configureServer(server) {
      server.watcher.add([MASTER_RESUME, PROFILE])
      const reload = (file) => {
        const f = file.replace(/\\/g, '/')
        if (f !== MASTER_RESUME.replace(/\\/g, '/') && f !== PROFILE.replace(/\\/g, '/')) return
        const mod = server.moduleGraph.getModuleById(resolvedId)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('change', reload)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    resumeData(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  base: "/",
})
