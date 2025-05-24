.PHONY: dev fs be

dev:
	@echo "Starting development environment..."
	@./scripts/full.sh

fs:
	@echo "Starting Next.js development environment..."
	@./scripts/fs.sh

be:
	@echo "Starting Nest.js development environment..."
	@./scripts/be.sh
