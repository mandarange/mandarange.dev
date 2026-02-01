좋아. Mandarange를 “퍼스널 브랜드”로 전면에 세우고, 지금까지 대화에서 드러난 너의 성향(SSOT/정합성/운영 안정성/문서화/AI와 함께 일하는 방식/미니멀하지만 프로덕트 감성)을 그대로 사이트 UX·디자인·콘텐츠 구조에 녹인 확장 PRD로 정리해줄게.

⸻

PRD v2 — mandarange.dev

Mandarange: English, blog-first personal brand site for an engineering leader

1) Brand Definition

1.1 Brand Promise

Mandarange = “Warm clarity + hard engineering.”
	•	“따뜻하지만 정확한 사람”
	•	“멋있는 말보다, 작동하는 설계/운영/문서”
	•	“복잡도를 줄이고(SSOT), 오류를 다루고(멱등/트랜잭션), 팀이 움직이게(표준/툴링) 만드는 사람”

1.2 Positioning (한 문장)
	•	“I build systems teams can trust—data integrity, operational simplicity, and pragmatic architecture.”

1.3 Tone & Voice (사이트 글쓰기 톤)
	•	Calm / precise / pragmatic / no hype
	•	주장 → 근거(사례/코드/도식/비교)
	•	“이론 설명”보다 “현장에서 이렇게 했다”를 우선

1.4 On-site Naming Rule
	•	사이트명은 Mandarange가 메인 (헤더/OG/푸터)
	•	Daniel Choi는 “About / Bio”에서만 자연스럽게 노출 (브랜드가 주인공, 사람이 뒷받침)

⸻

2) Goals / Success Metrics

2.1 Product Goals
	1.	Blog-first: 글이 자산이 되고, 글이 사이트의 중심 흐름
	2.	Trust-first: “이 사람이 어떤 방식으로 문제를 푸는지”가 즉시 보임
	3.	Operational simplicity: 글 추가/수정/배포가 귀찮지 않음 (Git-based MDX)
	4.	AI-friendly writing: 문서 구조가 일관되어 AI/사람 모두 읽기 쉬움 (너의 MD툴 철학 반영)
	5.	Case-study ready: 공개 가능한 범위에서 “의사결정/아키텍처/운영”을 증거로 남김

2.2 Success Metrics (런칭 후 4주 기준 제안)
	•	글 5개 이상 발행 (긴 글 2 + 짧은 노트 3)
	•	Writing 페이지 평균 체류시간 2분+
	•	Contact 클릭률(메일/링크) 1~3% (초기 기준)
	•	검색 유입 발생(“idempotency”, “SSOT”, “data model contradictions” 같은 키워드)

⸻

3) Target Audience & Message Fit

Primary
	•	리크루터/기술리더/투자자/파트너: “리더십, 설계, 운영 관점이 있는가?”
	•	협업 의뢰자: “이 사람과 일하면 결과물이 어떻게 나오나?”

Secondary
	•	개발자 독자: 글 자체가 쓸모있으면 구독/확산
	•	미래의 너: 의사결정 기록(ADR/회고/플레이북)

⸻

4) Core Narrative (너를 “Mandarange”로 표현하는 스토리)

4.1 3 Pillars (사이트 전체를 관통하는 3축)
	1.	Data Integrity & SSOT
	•	구조적 모순 없는 데이터 모델, 정규화의 균형, 단일 진실
	2.	Reliability by Design
	•	멱등성, 트랜잭션 안정성, 재시도/일관성, 운영 내구성
	3.	Shipping Systems & Culture
	•	표준(Dev Standards), 문서/리뷰, 툴링, AI와 협업하는 개발 워크플로우

이 3축이 네 글 카테고리/프로젝트 케이스스터디/소개문 전체에 반복적으로 드러나야 “한 사람의 철학”으로 느껴져.

⸻

5) Information Architecture

Top Nav (고정)
	•	Home /
	•	Writing /writing
	•	Projects /projects
	•	Principles /principles  ← 너에게 특히 중요 (SSOT/멱등/표준/문서/운영)
	•	Now /now
	•	About /about
	•	Contact /contact

Secondary Nav (Footer)
	•	Tags /tags
	•	RSS /rss.xml
	•	Search /search
	•	Privacy /privacy

⸻

6) Key Pages & Requirements

6.1 Home (/) — “10초 안에 신뢰”

Layout
	•	Hero: Mandarange 브랜딩 + 1문장 정체성 + CTA 2개
	•	Featured Writing 3: 대표 글(철학/플레이북/케이스)
	•	Featured Projects 2: “문제→접근→결과” 한 줄 요약
	•	Principles preview: 3~5개 원칙(짧고 단단하게)
	•	Now preview: “What I’m focused on this month”
	•	Footer: Links + RSS + Contact

Hero Copy (영어 예시)
	•	H1: “Mandarange—engineering notes for systems you can trust.”
	•	Sub: “Data integrity, reliable APIs, and shipping culture—written from real projects.”
	•	CTA1: “Read Writing”
	•	CTA2: “View Principles”

⸻

6.2 Writing Index (/writing)

필수
	•	최신순 리스트 + Pagination (SEO 유리)
	•	Tag filter + Tag index
	•	Search 진입 버튼
	•	카드 요소: title, excerpt, date, reading time, tags, “Updated” 뱃지

“Mandarange 스타일” 필터 (차별점)
	•	Filter chips:
	•	Playbook (실전 가이드)
	•	Decision Record (왜 이렇게 했나)
	•	Case Study
	•	Notes (짧은 기록)

⸻

6.3 Writing Detail (/writing/[slug])

Reading UX (너한테 잘 맞게)
	•	TOC (H2/H3) + 스크롤 스파이
	•	읽기 폭 제한(최대 720~760px)
	•	코드블록: 언어 표기 + Copy 버튼 + 줄 번호 옵션
	•	Callout 컴포넌트 4종 (MDX에서 쉽게 쓰기)
	•	Principle (원칙)
	•	Pitfall (함정)
	•	Checklist (체크리스트)
	•	“If I did it again” (회고)
	•	Related posts (태그 기반)
	•	“Last updated” 표시 (운영형 글의 신뢰도)

⸻

6.4 Projects (/projects)

보여주는 방식
	•	Selected 3~6개만 상단 강조
	•	프로젝트마다 공개 범위에 맞게:
	•	Problem
	•	Constraints (보안/레거시/팀/시간)
	•	Approach (아키텍처/데이터/운영)
	•	Outcome (정성/정량 가능하면)
	•	Role, Stack, Links (가능한 범위)

프로젝트 상세 템플릿(/projects/[slug]) 권장
	•	“Architecture diagram (simplified)” 섹션
	•	“Decision log” 섹션 (너의 강점)
	•	“Trade-offs” 섹션 (성숙함이 드러남)

⸻

6.5 Principles (/principles) — Mandarange의 핵심 자산

이 페이지가 있으면, “그냥 글 잘 쓰는 개발자”가 아니라 일관된 철학을 가진 리더로 보임.

구성:
	•	P1. SSOT & Data Integrity
	•	P2. Idempotency & Consistency
	•	P3. Operational Simplicity
	•	P4. Standards & Documentation
	•	P5. AI-assisted Workflow (Docs that machines can read) ← 너의 최근 관심사와 딱 맞음

각 원칙은:
	•	3줄 정의
	•	“Why it matters”
	•	“Patterns I use”
	•	“Common traps”
	•	관련 글 링크 2~3개

⸻

6.6 Now (/now)
	•	Focus (이번 달 집중)
	•	Learning (읽는/실험)
	•	Building (툴/문서/표준)
	•	Updated date (필수)

글이 잠깐 비어도 Now가 업데이트되면 “살아있는 사람”으로 느껴짐.

⸻

6.7 About (/about)
	•	Mandarange 소개(브랜드) → 사람 소개(너)
	•	“How I work”가 핵심 (협업/리뷰/문서/표준)
	•	공개 가능한 범위에서 CTO/제품/아키텍처 경험 요약

첫 문장 예시:
	•	“I’m Daniel, an engineering leader focused on data integrity and systems that scale operationally—not just technically.”

(여기에서만 Daniel Choi 이름을 자연스럽게 1회 노출)

⸻

6.8 Contact (/contact)
	•	Email은 반드시 1클릭
	•	“What I can help with” 체크리스트
	•	Architecture review
	•	Data model design
	•	Migration strategy
	•	Engineering standards & tooling
	•	스팸 방지(폼이면 honeypot + rate-limit)

⸻

7) Visual Design System (디자인을 “너답게”)

7.1 Design Principles
	1.	Reading first: 글이 가장 잘 읽히는 레이아웃
	2.	Quiet confidence: 과한 장식 없이 “정돈된 힘”
	3.	Evidence > decoration: 뱃지/도식/표가 정보 전달을 돕는 수준
	4.	Warm accent: Mandarange의 “따뜻함”은 포인트 컬러/미세한 그래디언트로만

7.2 Look & Feel
	•	배경: off-white (눈 피로 줄이기)
	•	텍스트: 진한 차콜
	•	포인트: “mandarange orange” (단, 과하지 않게)
	•	그림자/카드: 매우 얕게(신뢰감 있는 문서 느낌)

7.3 Typography
	•	Sans: Inter / SF Pro / system-ui
	•	Mono: IBM Plex Mono / JetBrains Mono (코드 및 메타정보)
	•	Heading: 타이트, Body: 여유로운 line-height

권장 스케일:
	•	H1 40–48
	•	H2 28–32
	•	Body 16–18
	•	Meta 13–14

7.4 Components (MDX/페이지 공통)
	•	PostCard
	•	TagPill
	•	Callout (4종)
	•	CodeBlock (+ Copy)
	•	InlineCode (배경 톤 다운)
	•	QuoteBlock
	•	ChecklistBlock (playbook 스타일)
	•	DiagramFrame (이미지/도식 공통 프레임)
	•	KPIChip (Outcome 수치가 있을 때만)

7.5 Motion (선택)
	•	스크롤/호버 애니메이션은 “거의 안 느껴질 정도”
	•	TOC 활성 강조 정도만 부드럽게

⸻

8) Brand Assets (가볍게, 하지만 일관되게)

Logo (초간단 제안)
	•	“M” 모노그램 + 원형(오렌지 껍질 단면을 연상시키는 1~2개의 arc)
	•	파비콘은 단색 원 + M

OG Image Template (필수)
	•	배경: off-white + 아주 옅은 그라데이션
	•	큰 제목 1줄(최대 7–9 단어)
	•	아래: Mandarange / tag / date
	•	글마다 자동 생성

⸻

9) Content System — “AI와 사람이 같이 읽는 글”

너는 MD 문서/AI 협업 퍼포먼스를 중요하게 봤고, 그 철학을 사이트에도 반영하면 “너다움”이 강해져.

9.1 Writing Format Standard (모든 글 공통)
	•	TL;DR (3 bullets)
	•	Context (왜 이 글을 쓰는지)
	•	Approach (패턴/결정)
	•	Examples (코드/도식)
	•	Checklist (실행 항목)
	•	Trade-offs
	•	Closing (next steps)

9.2 Frontmatter (추천 확장)

title:
slug:
date:
updated:
excerpt:
tags:
type: playbook | decision | case-study | notes
audience: engineers | leaders | founders
draft:

9.3 “AI-friendly” 규칙
	•	Heading은 의미 단위로 쪼개기(H2가 너무 길지 않게)
	•	리스트는 가능한 병렬 구조
	•	중요한 정의는 Callout(Principle)로 고정
	•	결론에는 “copyable checklist” 제공
→ 이건 너의 “문서가 실제로 쓰이게 만드는” 스타일을 보여줌

⸻

10) Tech Spec (너의 스택 성향 반영)

10.1 Recommended Stack
	•	Next.js(App Router) + MDX
	•	Deploy: Vercel
	•	Content: git-based
	•	Optional future: Supabase + Clerk (지금은 굳이 안 써도 됨)

10.2 Must-have Features (MVP)
	•	Writing list/detail + tags
	•	Search (build-time index)
	•	RSS + sitemap + robots
	•	OG 자동 생성
	•	canonical / structured data(Article)

10.3 Nice-to-have (v1+)
	•	Dark mode
	•	Giscus 댓글
	•	Newsletter(외부)
	•	Reading progress bar
	•	“Copy snippet” / “Copy checklist” 버튼

⸻

11) Security / Privacy / Trust
	•	Analytics는 최소(쿠키 없는 옵션 우선)
	•	Contact form은 스팸 방지
	•	About/Projects에는 기밀/고객명/정확한 수치 노출 최소화(원칙/패턴 중심)
	•	“Opinions are my own” 한 줄(필요 시)

⸻

12) Launch Content Plan (너한테 딱 맞는 초기 8개)

Pillar 1: Data Integrity & SSOT
	1.	“Designing Data Models That Don’t Contradict Themselves” (playbook)
	2.	“SSOT Is a Promise, Not a Slogan” (decision)

Pillar 2: Reliability
	3.	“Idempotency in Practice: Retries Without Regret” (playbook)
	4.	“Transactions, Outbox, and the Myth of ‘Just Use Events’” (essay)

Pillar 3: Shipping & Culture
	5.	“Engineering Standards That Teams Actually Follow” (case-study)
	6.	“How I Review PRs: A System, Not a Mood” (notes)

AI + Docs (너의 최근 흐름)
	7.	“Writing Docs for Humans and LLMs” (playbook)
	8.	“The MD Toolkit Mindset: Make Documentation Operable” (case-study)

⸻

13) Acceptance Criteria (완료 기준)

Brand/Design
	•	사이트 어디서든 “Mandarange”가 1순위로 보인다
	•	읽기 폭/타이포가 장문 읽기에 최적화되어 있다
	•	Callout/Checklist/CodeBlock이 일관된 컴포넌트로 제공된다
	•	OG 이미지가 글마다 자동으로 생성/노출된다

Content Ops
	•	새 글 추가가 “MDX 파일 추가 + frontmatter”로 끝난다
	•	draft는 배포에서 자동 제외된다
	•	tags/search/rss/sitemap이 자동 업데이트된다

Trust UX
	•	글 상세에 TOC, reading time, updated date가 표시된다
	•	projects/principles가 글로 자연스럽게 연결된다

⸻

14) Roadmap

Phase 1 (MVP)
	•	Home/Writing/Post/Tags/Search/RSS/OG/Sitemap
	•	About/Now/Contact
	•	Principles 기본 버전

Phase 2 (Proof 강화)
	•	Projects 상세(케이스 템플릿)
	•	Principles 확장(패턴/함정/체크리스트)

Phase 3 (독자/브랜드 확장)
	•	Newsletter/댓글/다크모드
	•	시리즈 페이지, reading progress

⸻

15) Deliverables (바로 개발 들어갈 수 있게)

원하면 다음을 “즉시 제작 가능한 형태”로 내줄 수 있어:
	1.	Copy 패키지: Home hero 문구 5안 + About 문단 3안(톤 다른 버전)
	2.	MDX 템플릿 4종: playbook / decision record / case study / notes
	3.	컴포넌트 스펙: Callout 4종의 디자인/동작/마크업 규칙
	4.	사이트 IA 확정 라우트 + 폴더 구조

