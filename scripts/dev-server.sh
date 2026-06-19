#!/usr/bin/env bash
# Τοπικός server για προεπισκόπηση (ίδιο με πριν: http://127.0.0.1:8765/)
# Χρήση: από το root του project →  ./scripts/dev-server.sh
# Άλλη θύρα: ./scripts/dev-server.sh 8080

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
PORT="${1:-8765}"

if command -v lsof >/dev/null 2>&1; then
  PIDS="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -n "${PIDS:-}" ]]; then
    echo "Η θύρα $PORT είναι ήδη σε χρήση (πιθανό «κολλημένο» process)." >&2
    echo "Για να την αδειάσεις, τρέξε:" >&2
    echo "  kill $PIDS" >&2
    echo "ή:  kill -9 $PIDS" >&2
    exit 1
  fi
fi

echo "Άνοιγμα http://127.0.0.1:$PORT/  (Ctrl+C για διακοπή)"
exec python3 -m http.server "$PORT" --bind 127.0.0.1
