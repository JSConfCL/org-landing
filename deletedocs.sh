#!/bin/bash

type=$1
npx sanity documents query "*[_type == '$type']._id" --apiVersion 2021-03-25 | npx groq '*' -o ndjson | tr '\n' ' ' | sed 's/"//g' | xargs npx sanity documents delete