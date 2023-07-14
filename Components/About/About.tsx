import React from "react";

export default function About() {
  return (
    <div className="about_wrapper bg-slate-50 relative z-30">
      <div className="container mx-auto">
        <div className="about_content flex items-center justify-center p-40 ">
          <h3 className="text-center py bg-sky-400 p-20">
            Instrumentation is the process of enabling your application code to
            generate telemetry data like logs, metrics, and traces. Using
            OpenTelemetry Nextjs client libraries, you can generate end-to-end
            tracing data from your Nextjs application. OpenTelemetry provides
            client libraries to take care of instrumentation.
          </h3>
        </div>
      </div>
    </div>
  );
}
