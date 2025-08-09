# app/llm.py
import time
import html

def generate_resume_from_profile(user_profile: dict, job_description: str, metadata: dict) -> dict:
    """
    Replace this with real LLM call.
    Returns dict with keys: html, text_summary, meta
    """
    # simulate work
    time.sleep(2)

    name = user_profile.get("fullName") or user_profile.get("name") or "Candidate"
    headline = html.escape(user_profile.get("headline", ""))
    # very simple html generation placeholder
    html_content = f"""
    <html><body>
      <h1>{html.escape(name)}</h1>
      <p><strong>{headline}</strong></p>
      <h2>Job Target</h2>
      <p>{html.escape(job_description[:800])}</p>
      <h2>Auto-generated bullets</h2>
      <ul>
        <li>Tailored bullet 1 for {html.escape(name)}</li>
        <li>Tailored bullet 2 highlighting skills</li>
      </ul>
    </body></html>
    """
    return {
        "html": html_content,
        "text_summary": f"Resume for {name}. Tailored to given JD.",
        "meta": {"generated_by": "mock-llm", "length": "short"}
    }
