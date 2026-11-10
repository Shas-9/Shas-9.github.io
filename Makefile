# Résumé / cover-letter helper. Needs: make + a LaTeX install with latexmk (e.g. texlive).
# PDFs are written to build/ (git-ignored).   Run `make help` for the list.

SHELL := /bin/bash
LATEXMK = latexmk -pdf -cd -interaction=nonstopmode -halt-on-error -outdir=$(CURDIR)/build
RESUME_DIR = resume
LETTER_DIR = cover_letter
# Everything from \documentclass down (the banner comments at the top differ by design).
body = sed -n '/^\\documentclass/,$$p'

.PHONY: help master-resume temporary-resume resume new-resume final-resume \
        master-cover-letter temporary-cover-letter cover-letter new-cover-letter final-cover-letter \
        all archive site-pdf clean

help:
	@echo "Resume"
	@echo "  make new-resume              master_resume.tex -> temporary_resume.tex (start a new job)"
	@echo "  make temporary-resume        build PDF of temporary_resume.tex (preview)"
	@echo "  make final-resume            temporary_resume.tex -> Sharzil_Hasnine_Resume.tex, build PDF"
	@echo "  make resume                  build PDF of Sharzil_Hasnine_Resume.tex"
	@echo "  make master-resume           build PDF of master_resume.tex"
	@echo "Cover letter"
	@echo "  make new-cover-letter        master_cover_letter.tex -> temporary_cover_letter.tex"
	@echo "  make temporary-cover-letter  build PDF of temporary_cover_letter.tex (preview)"
	@echo "  make final-cover-letter      temporary -> Sharzil_Hasnine_Cover_Letter.tex, build PDF"
	@echo "  make cover-letter            build PDF of Sharzil_Hasnine_Cover_Letter.tex"
	@echo "Other"
	@echo "  make archive NAME=acme-swe   snapshot final resume + cover letter into applications/acme-swe_*.tex"
	@echo "  make site-pdf                copy the final resume PDF into public/ (for local 'npm run dev')"
	@echo "  make all                     build every PDF"
	@echo "  make clean                   delete build/"

# ---- builds ----------------------------------------------------------------
master-resume:
	$(LATEXMK) $(RESUME_DIR)/master_resume.tex
temporary-resume:
	$(LATEXMK) $(RESUME_DIR)/temporary_resume.tex
resume:
	$(LATEXMK) $(RESUME_DIR)/Sharzil_Hasnine_Resume.tex
master-cover-letter:
	$(LATEXMK) $(LETTER_DIR)/master_cover_letter.tex
temporary-cover-letter:
	$(LATEXMK) $(LETTER_DIR)/temporary_cover_letter.tex
cover-letter:
	$(LATEXMK) $(LETTER_DIR)/Sharzil_Hasnine_Cover_Letter.tex

all: master-resume temporary-resume resume master-cover-letter temporary-cover-letter cover-letter

# ---- workflow: master -> temporary -> final ---------------------------------
# new-* never silently destroys work: it refuses if the temporary file has edits that are
# not yet in the master or the final file, unless you pass FORCE=1.
new-resume:
	@if [ -z "$(FORCE)" ] \
	  && ! cmp -s <($(body) $(RESUME_DIR)/temporary_resume.tex) <($(body) $(RESUME_DIR)/master_resume.tex) \
	  && ! cmp -s <($(body) $(RESUME_DIR)/temporary_resume.tex) <($(body) $(RESUME_DIR)/Sharzil_Hasnine_Resume.tex); then \
	  echo "temporary_resume.tex has edits that were never promoted."; \
	  echo "Run 'make final-resume' (and 'make archive NAME=...') first, or use FORCE=1 to overwrite."; exit 1; fi
	cat scripts/banners/temporary_resume.banner.tex > $(RESUME_DIR)/temporary_resume.tex
	$(body) $(RESUME_DIR)/master_resume.tex >> $(RESUME_DIR)/temporary_resume.tex
	@echo "temporary_resume.tex reset from master. Edit it for the job."

final-resume:
	cp $(RESUME_DIR)/temporary_resume.tex $(RESUME_DIR)/Sharzil_Hasnine_Resume.tex
	$(MAKE) resume
	@echo "Built build/Sharzil_Hasnine_Resume.pdf"

new-cover-letter:
	@if [ -z "$(FORCE)" ] \
	  && ! cmp -s <($(body) $(LETTER_DIR)/temporary_cover_letter.tex) <($(body) $(LETTER_DIR)/master_cover_letter.tex) \
	  && ! cmp -s <($(body) $(LETTER_DIR)/temporary_cover_letter.tex) <($(body) $(LETTER_DIR)/Sharzil_Hasnine_Cover_Letter.tex); then \
	  echo "temporary_cover_letter.tex has edits that were never promoted."; \
	  echo "Run 'make final-cover-letter' (and 'make archive NAME=...') first, or use FORCE=1 to overwrite."; exit 1; fi
	cat scripts/banners/temporary_cover_letter.banner.tex > $(LETTER_DIR)/temporary_cover_letter.tex
	$(body) $(LETTER_DIR)/master_cover_letter.tex >> $(LETTER_DIR)/temporary_cover_letter.tex
	@echo "temporary_cover_letter.tex reset from master. Fill it in."

final-cover-letter:
	@if grep -qE '^[^%]*\\todo\{' $(LETTER_DIR)/temporary_cover_letter.tex; then \
	  echo "temporary_cover_letter.tex still has red \\todo{...} placeholders:"; \
	  grep -nE '^[^%]*\\todo\{' $(LETTER_DIR)/temporary_cover_letter.tex; exit 1; fi
	cp $(LETTER_DIR)/temporary_cover_letter.tex $(LETTER_DIR)/Sharzil_Hasnine_Cover_Letter.tex
	$(MAKE) cover-letter
	@echo "Built build/Sharzil_Hasnine_Cover_Letter.pdf"

# ---- keep a record of what you sent -------------------------------------------
# Saves flat files in applications/ so the ../shared paths still resolve and they stay compilable.
archive:
	@test -n "$(NAME)" || (echo "Usage: make archive NAME=company-role"; exit 1)
	cp $(RESUME_DIR)/Sharzil_Hasnine_Resume.tex applications/$(NAME)_resume.tex
	cp $(LETTER_DIR)/Sharzil_Hasnine_Cover_Letter.tex applications/$(NAME)_cover_letter.tex
	@echo "Saved applications/$(NAME)_resume.tex and applications/$(NAME)_cover_letter.tex"

# ---- website helper ---------------------------------------------------------
site-pdf: resume
	cp build/Sharzil_Hasnine_Resume.pdf public/Sharzil_Hasnine_Resume.pdf

clean:
	rm -rf build
