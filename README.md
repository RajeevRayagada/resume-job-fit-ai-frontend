# Resume Job Fit AI

Full-stack AI-powered application that evaluates compatibility between resumes and job descriptions using structured LLM-based analysis.

Live Demo:  
https://resume-job-fit-ai-frontend.vercel.app

---

## Overview

Resume Job Fit AI analyzes how well a candidate’s resume aligns with a job description using a large language model (LLM). Instead of relying on keyword matching or traditional similarity metrics, the system uses prompt-engineered evaluation to generate structured insights.

The backend enforces strict JSON validation to ensure reliable and consistent responses.

---

## Architecture

### Frontend
- Next.js (TypeScript)
- Deployed on Vercel
- Handles user input and result rendering
- Communicates with backend via REST API

### Backend
- FastAPI (Python)
- Deployed on Render (Free Tier)
- Integrates with OpenRouter API
- Uses GPT-4o-mini for structured evaluation
- Validates output using Pydantic schemas

---

## AI Evaluation Engine

The system uses:

- OpenRouter integration
- GPT-4o-mini model
- Prompt-engineered structured output
- Strict JSON schema validation

The model is instructed to return ONLY:

- match_score (integer 0–100)
- strengths (list of strings)
- missing_skills (list of strings)
- suggestions (list of strings)

The backend validates the structure using Pydantic before returning the response to the frontend.

This ensures reliability even when working with probabilistic LLM outputs.

---

## System Flow

1. User pastes resume text and job description.
2. Frontend sends POST request to backend.
3. Backend forwards structured prompt to GPT-4o-mini via OpenRouter.
4. Model analyzes contextual alignment.
5. Model returns structured JSON.
6. Backend validates JSON schema.
7. Validated response is returned to frontend.
8. Frontend displays:
   - Match score
   - Strengths
   - Missing skills
   - Suggestions

---

## Features

- Resume text input
- Job description analysis
- LLM-based contextual evaluation
- Strict schema validation using Pydantic
- RESTful API architecture
- CORS configuration for secure cross-origin requests
- Cold start handling (Render free tier awareness)

---

## Deployment

Frontend:
- Hosted on Vercel
- Continuous deployment from GitHub

Backend:
- Hosted on Render (Free Tier)
- Auto-sleeps after inactivity
- Cold start handled gracefully in UI

---

## Technical Highlights

- Full-stack architecture (decoupled frontend and backend)
- LLM-based structured reasoning instead of keyword matching
- Schema validation to prevent malformed AI responses
- Production deployment on modern cloud platforms
- Error handling for model and network failures

---

## Design Decisions

Why LLM-based evaluation instead of TF-IDF or cosine similarity?

- Context-aware reasoning beyond keyword overlap
- Ability to evaluate soft skills and experience alignment
- More flexible scoring without manual feature engineering

To ensure reliability, the system enforces strict JSON validation before returning responses.

---

## Future Improvements

- Resume PDF parsing
- Rate limiting and authentication
- Model fallback mechanisms
- Cost monitoring and caching
- Dockerized deployment for scalable hosting
- Hybrid scoring (LLM + embedding similarity)

---

## Backend Repository

https://github.com/RajeevRayagada/resume-job-fit-ai-backend
