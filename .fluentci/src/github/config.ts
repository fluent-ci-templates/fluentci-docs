import { JobSpec, Workflow } from "fluent_github_actions";

export function generateYaml(): Workflow {
  const workflow = new Workflow("Deploy");

  const push = {
    branches: ["master"],
  };

  const setupDagger = `\
  curl -L https://dl.dagger.io/dagger/install.sh | DAGGER_VERSION=0.8.1 sh
  sudo mv bin/dagger /usr/local/bin
  dagger version`;

  const deploy: JobSpec = {
    "runs-on": "ubuntu-latest",
    steps: [
      {
        uses: "actions/checkout@v2",
      },
      {
        uses: "denoland/setup-deno@v1",
        with: {
          "deno-version": "v1.36",
        },
      },
      {
        name: "Setup Fluent CI CLI",
        run: "deno install -A -r https://cli.fluentci.io -n fluentci",
      },
      {
        name: "Setup Dagger",
        run: setupDagger,
      },
      {
        name: "Run Dagger Pipelines",
        run: "dagger run fluentci . build pages-deploy",
        env: {
          CF_API_TOKEN: "${{ secrets.CLOUDFLARE_API_TOKEN }}",
          CF_ACCOUNT_ID: "fe5b1e2ce9f94f4c0415ab94ce402012",
          PROJECT_NAME: "fluentci-docs",
          DIRECTORY: "build",
          BUN_VERSION: "0.8.1",
          NODE_VERSION: "19.9.0",
        },
      },
    ],
  };

  workflow.on({ push }).jobs({ deploy });

  return workflow;
}
