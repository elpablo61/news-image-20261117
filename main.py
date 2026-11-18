#!/usr/bin/env python3
"""Entry point for the make.fun news-image-20261117 competition.

Copies the pre-built entry image (entry.png, next to this file) to the
output directory as entry.png. Standard library only, no network access.
"""
import os
import shutil

SOURCE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "entry.png")


def main():
    if not os.path.isfile(SOURCE):
        raise SystemExit("missing bundled image: " + SOURCE)
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    dest = os.path.join(out_dir, "entry.png")
    shutil.copyfile(SOURCE, dest)
    print("wrote", dest, os.path.getsize(dest), "bytes")


if __name__ == "__main__":
    main()
