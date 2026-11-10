import { Reveal } from "@/components/shared/reveal";
import { DATA_FLOWS, PERMISSIONS } from "@/content/privacy";

const DATA_FLOW_FIELDS = [
  { key: "trigger", label: "When" },
  { key: "destination", label: "Where it goes" },
  { key: "dataSent", label: "What is sent" },
] as const;

export function DataFlowList() {
  return (
    <div>
      <h3 className="text-xl font-semibold">When your text leaves your computer</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Only in these three cases. All of them are off by default and start with something you do.
      </p>
      <ol className="mt-6 grid gap-4 lg:grid-cols-3">
        {DATA_FLOWS.map((flow, index) => (
          <Reveal as="li" key={flow.trigger} delay={index * 0.06} className="rounded-2xl border border-border bg-background p-5">
            <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
              {index + 1}
            </span>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              {DATA_FLOW_FIELDS.map((field) => (
                <div key={field.key}>
                  <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {field.label}
                  </dt>
                  <dd className="mt-1 leading-relaxed">{flow[field.key]}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function PermissionList() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Permissions the extension asks for</h3>
      <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {PERMISSIONS.map((permission) => (
          <li key={permission.name} className="flex flex-col gap-1.5 border-l-2 border-primary/30 pl-4">
            <code className="w-fit rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold">
              {permission.name}
            </code>
            <span className="text-sm leading-relaxed text-muted-foreground">{permission.reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
