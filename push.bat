#!/usr/bin/env bash
echo off
echo "Start Pushing..."
git add .
set/p message="Input your commit messages:"
git cm -m message
git push origin master
echo "End Pushing...."