function About() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>
          About <span className="gradient-text">SynthraAI</span>
        </h1>
        <p>
          We're building the operating system for intelligent applications.
        </p>
      </div>

      <div className="page-content">
        <p>
          SynthraAI was founded with a simple belief: building with AI should
          feel as natural as writing code. Today's tooling is fragmented —
          prompt editors live in one tab, observability in another, and
          deployment is a manual process held together with scripts and hope.
        </p>

        <h2>Our Mission</h2>
        <p>
          We unify the entire AI development lifecycle — from the first prompt
          draft to a production endpoint serving millions of requests — into a
          single, coherent platform. Fewer tools, fewer context switches,
          faster shipping.
        </p>

        <h2>Built for Teams</h2>
        <p>
          Whether you're a solo developer experimenting with a new model or an
          enterprise team managing hundreds of pipelines, SynthraAI scales with
          you. Every workspace is git-backed, every change is auditable, and
          every deployment is reproducible.
        </p>

        <h2>Open & Extensible</h2>
        <p>
          We believe in openness. SynthraAI integrates with the tools you
          already use — OpenAI, Anthropic, Google, Hugging Face, and any
          OpenAI-compatible API. Bring your own models, your own data, your own
          infrastructure. We provide the glue.
        </p>
      </div>
    </main>
  )
}

export default About
