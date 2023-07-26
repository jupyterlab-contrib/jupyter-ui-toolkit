# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

import argparse
from packaging.version import parse as parse_version
from pathlib import Path
from subprocess import run

LERNA_CMD = "yarn run lerna version --no-push --force-publish --no-git-tag-version"


ENC = dict(encoding="utf-8")
HATCH_VERSION = "hatch version"
ROOT = Path(__file__).parent.parent


def get_version():
    cmd = run([HATCH_VERSION], capture_output=True, shell=True, check=True, cwd=ROOT)
    return cmd.stdout.decode("utf-8").strip().split("\n")[-1]


def next_version():
    v = parse_version(get_version())
    if v.is_prerelease:
        return f"{v.major}.{v.minor}.{v.micro}{v.pre[0]}{v.pre[1] + 1}"
    return f"{v.major}.{v.minor}.{v.micro + 1}"


def bump():
    parser = argparse.ArgumentParser()
    parser.add_argument("spec")
    parser.add_argument("--force", action='store_true')
    args = parser.parse_args()
    py_version = next_version() if args.spec == "next" else args.spec

    # bump the Python version with hatch
    run(f"{HATCH_VERSION} {py_version}", shell=True, check=True, cwd=ROOT)

    js_version = (
        get_version().replace("a", "-alpha.").replace("b", "-beta.").replace("rc", "-rc.")
    )

    # bump the JS version with lerna
    lerna_cmd = f"{LERNA_CMD} {js_version}"
    if args.force:
        lerna_cmd += " --yes"

    run(f"{which('yarn')} install")
    run(lerna_cmd, shell=True, check=True)

    # HERE = Path(__file__).parent.parent.resolve()
    # path = HERE.joinpath("package.json")
    # if path.exists():
    #     with path.open(mode="r") as f:
    #         data = json.load(f)

    #     data["version"] = js_version

    #     with path.open(mode="w") as f:
    #         json.dump(data, f, indent=2)

    # else:
    #     raise FileNotFoundError(f"Could not find package.json under dir {path!s}")


if __name__ == "__main__":
    bump()
