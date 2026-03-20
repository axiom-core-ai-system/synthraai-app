function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Now in Public Beta
          </div>
          <h1>
            Build Smarter with{' '}
            <span className="gradient-text">AI-Powered</span> Intelligence
          </h1>
          <p>
            SynthraAI is a next-generation platform for building, deploying, and
            managing intelligent systems — from prompt engineering to production
            pipelines.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">
              Explore Features
            </a>
            <a href="#stats" className="btn btn-secondary">
              View Platform
            </a>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <h2>
              Everything you need to{' '}
              <span className="gradient-text">ship AI</span>
            </h2>
            <p>
              A unified toolkit that takes you from prototype to production
              without the infrastructure headaches.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Prompt Studio</h3>
              <p>
                Design, version, and test prompts in a collaborative
                workspace. Compare outputs side-by-side and iterate fast.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Pipeline Builder</h3>
              <p>
                Chain models, tools, and data sources into production-ready
                workflows with a visual drag-and-drop interface.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Observability</h3>
              <p>
                Monitor latency, token usage, and quality scores in real-time.
                Set alerts and catch regressions before users do.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety & Guardrails</h3>
              <p>
                Built-in content filters, PII detection, and output validation
                to keep your AI systems compliant and safe.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>One-Click Deploy</h3>
              <p>
                Ship to any cloud — or your own infrastructure — with a single
                command. Zero-downtime updates included.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Team Collaboration</h3>
              <p>
                Shared workspaces, git-backed version control, and role-based
                access for teams of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section" id="stats">
        <div className="container">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value gradient-text">50M+</div>
              <div className="stat-label">API Calls / Day</div>
            </div>
            <div className="stat">
              <div className="stat-value gradient-text">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat">
              <div className="stat-value gradient-text">3.2k</div>
              <div className="stat-label">Teams Onboarded</div>
            </div>
            <div className="stat">
              <div className="stat-value gradient-text">&lt;40ms</div>
              <div className="stat-label">Median Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <h2>
            Ready to <span className="gradient-text">accelerate</span>?
          </h2>
          <p>
            Join thousands of teams already shipping AI with SynthraAI.
          </p>
          <a href="mailto:hello@synthraai.app" className="btn btn-primary">
            Get Early Access
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
