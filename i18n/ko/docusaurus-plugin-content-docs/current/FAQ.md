---
id: faq
title: FAQ
description: AI Unlimited 질문에 대한 답변을 여기에서 찾아보십시오.
sidebar_label: FAQ
sidebar_position: 6
pagination_prev: null
pagination_next: null
---

# FAQ


## 일반적인

### AI Unlimited는 어떤 CSP(클라우드 서비스 공급자)를 지원하나요?
현재는 AWS와 Azure입니다.

### 어떤 분석 기능을 사용할 수 있습니까?
[ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) 기능. 현재 지원되지 않는 기능은 [릴리스 정보](./whats-new/release-notes.md)를 참조하십시오.

### AI Unlimited 비용은 어떻게 결제하나요?
AI/ML 엔진 리소스가 실행되는 시간에 대해 클라우드 서비스 공급자에게 비용을 지불합니다. 요금은 인스턴스 크기와 인스턴스 수에 따라 달라집니다.

### 오류가 발생하거나 해결할 수 없는 문제가 발생하면 어떻게 해야 하나요?
<a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내십시오. 또한 [AI Unlimited 커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에서 도움을 드릴 준비가 되어 있습니다. 거기에서 질문을 하고, 문제 해결 조언을 받고, 아이디어를 공유하십시오.


## 프로젝트

### 프로젝트란 무엇인가요?
프로젝트는 Jupyter Notebook의 데이터를 탐색하고 분석하는 수단입니다. 각 프로젝트에는 GitHub 또는 GitLab 계정에 저장소가 있습니다.

### 프로젝트를 어떻게 사용하나요?
Jupyter Notebook에서 프로젝트를 만들면 자동으로 Git 저장소가 생성됩니다. 그런 다음 데이터 저장소에 대한 액세스를 인증하고 프로젝트의 AI/ML 엔진을 배포하고 분석 워크로드를 실행합니다. 언제든지 프로젝트(및 엔진)를 일시 중단한 다음 복원하여 필요한 시간만큼만 비용을 지불할 수 있습니다.

### 내 API 키는 무엇을 위해 쓰이나요?
API 키를 사용하여 Jupyter Notebook을 AI Unlimited 관리자에 연결합니다. 이는 프로젝트를 만들거나 액세스하기 위해 새 노트북을 열 때 가장 먼저 하는 일입니다.

### 프로젝트 저장소에는 무엇이 있나요?
프로젝트 소유자(프로젝트를 만든 사용자)는 Git 저장소에 프로젝트 공동 작업자를 추가합니다. 거기에서 엔진이 배포될 때마다 AI Unlimited는 엔진에 연결하고 사용할 권한이 있는 사용자를 파생시킵니다. 

하지만 엔진이 이미 배포된 경우 프로젝트 소유자는 엔진을 업데이트하여 해당 사용자를 추가해야 배포 중에 엔진에 연결하고 사용할 수 있습니다.

:::note
엔진이 배포될 때마다 각 프로젝트 사용자에 대해 새 비밀번호가 생성됩니다.
:::

당신이나 다른 사용자가 프로젝트를 일시 중단할 때마다 해당 스키마가 저장소에 백업됩니다. AI Unlimited는 저장된 스키마를 사용하여 프로젝트가 복원될 때 다시 가져옵니다.


## 사용자

### AI Unlimited 사용자 유형은 무엇입니까?
관리자, 프로젝트 소유자 및 공동 작업자:
- 관리자는 귀하의 조직에서 AI Unlimited를 설정하는 사용자입니다. 
- 프로젝트를 만든 사용자는 프로젝트의 소유자입니다. 
- 프로젝트의 추가 사용자는 공동 작업자입니다.

### 저는 관리자입니다. 초기 설정 후 돌아가서 설정을 변경할 수 있나요?
네, 설정에 다시 로그인하여 변경 사항을 적용하십시오.


### 관리자가 다른 관리자를 추가할 수 있나요?
아니요, AI Unlimited는 관리자 한 명을 지원합니다.

### 저는 프로젝트 소유자입니다. 프로젝트에 공동 작업자를 추가하려면 어떻게 해야 하나요?
먼저, 프로젝트의 Git 저장소에 추가합니다. 

엔진을 배포하기 전에 이 작업을 수행하면 엔진을 배포할 때 새로운 공동 작업자가 자동으로 추가됩니다. 

엔진이 배포된 후에 저장소에 공동 작업자를 추가하는 경우, 배포 중에 엔진에 연결하여 엔진을 사용할 수 있도록 수동으로 엔진에 추가해야 합니다.


## 일시 중단 및 복원 

### 프로젝트를 일시 중단하면 어떻게 되나요?
사용자 및 개체 저장소 인증과 데이터 개체를 포함한 모든 프로젝트 정보가 저장됩니다.

### 프로젝트를 복원하면 어떻게 되나요?
저장된 프로젝트 정보가 있습니다. 중단한 곳에서 바로 이어서 볼 수 있습니다.


## 관리자

### 관리자는 누구인가요?
관리자는 클라우드 서비스 공급자에서 AI/ML 엔진의 배포를 조율하는 AI Unlimited 구성 요소입니다. 

또한 AI Unlimited 관리자가 AI Unlimited를 설치한 후 이를 설정하고 나중에 필요에 따라 설정을 변경할 수 있는 웹 기반 사용자 인터페이스를 제공합니다. 

모든 사용자는 관리자의 사용자 프로파일에서 Jupyter Notebook을 관리자에 연결하기 위한 API 키를 받습니다.

:::tip
질문이 보이지 않으십니까? [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에서 질문하십시오.
:::



