#!/bin/bash
cd /home/kavia/workspace/code-generation/auravibe-34892-8a73d418/auraVibe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

