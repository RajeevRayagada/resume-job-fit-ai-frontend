# Resume Job Fit AI

Full-stack AI-powered application that evaluates compatibility between resumes and job descriptions using embedding-based NLP similarity scoring.

Live Demo: https://resume-job-fit-ai-frontend.vercel.app

---

## Overview

Resume Job Fit AI analyzes how well a candidate’s resume aligns with a given job description. It uses transformer-based embeddings and cosine similarity to compute a match score and provide actionable feedback.

The system is designed with a clean frontend-backend separation and deployed using modern cloud platforms.

---

## Architecture

### Frontend
- Next.js (TypeScript)
- Deployed on Vercel
- Handles user input, API communication, and result rendering

### Backend
- FastAPI (Python)
- Deployed on Render (Free Tier)
- REST API for resume-job analysis
- Handles NLP processing and similarity scoring

### NLP Pipeline
- Text preprocessing
- Sentence-transformer embeddings
- Cosine similarity computation
- Structured response generation

---

## System Flow

1. User pastes resume text and job description.
2. Frontend sends a POST request to backend API.
3. Backend preprocesses and cleans the text.
4. Embeddings are generated using transformer model.
5. Cosine similarity is calculated between resume and job vectors.
6. Match score and insights are returned as JSON.
7. Frontend renders:
   - Match score
   - Strengths
   - Missing skills
   - Suggestions

---

## Features

- Resume text input
- Job description parsing
- Embedding-based similarity scoring
- RESTful API architecture
- Cold start handling (Render free tier awareness)
- Clean and responsive UI

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

- Full-stack architecture (Frontend + Backend separation)
- Embedding-based semantic similarity instead of keyword matching
- Production deployment using modern cloud platforms
- API-based integration model
- Error handling and reliability considerations

---

## Future Improvements

- Resume PDF parsing
- Skill extraction using Named Entity Recognition
- Weight-based scoring by job requirements
- Authentication layer
- Scalable deployment (Docker + container orchestration)

---

## Backend Repository

https://github.com/RajeevRayagada/resume-job-fit-ai-backend
