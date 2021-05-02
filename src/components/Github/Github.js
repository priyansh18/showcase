import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import GithubActivityOverview from './GithubActivityOverview';
import LatestPRs from './LatestPRs';
import fetchGithubSvg from '../../utils/fetchGithubSvg';
import fetchGithubStats from '../../utils/fetchGithubStats';

import {
  GithubSection,
  GithubActions,
  GithubAction,
  GithubType,
  Counter,
  GithubSvgSection,
  WakatimeStats,
  Figure,
  Embed,
} from './Github.styles';
import Title from '../shared/Title';
import { Container, Icon, FloatingImage } from '../css-in-js/shared';

import GithubBackground from '../../static/patterns/bg-github.svg';
import GithubGradIcon from '../../static/icons/githubgrad.svg';
import DotPattern1 from '../../static/patterns/dotpattern1.svg';
import DotPattern2 from '../../static/patterns/dotpattern2.svg';
import CommitIcon from '../../static/icons/commits.svg';
import IssueIcon from '../../static/icons/issues.svg';
import ContributionIcon from '../../static/icons/contributedto.svg';
import StarsIcon from '../../static/icons/stars.svg';
import PRIcon from '../../static/icons/PR.svg';
import Lady from '../../static/lady.svg';
import Boy from '../../static/boy.svg';

const Github = () => {
  const [svg, setSvg] = useState('');
  const [stats, setStats] = useState({
    name: '',
    totalStars: 0,
    totalIssues: 0,
    totalCommits: 0,
    totalPRs: 0,
    userSelfPRs: [],
    userContribPRs: [],
    totalContributedTo: 0,
    contributionRepos: [],
    totalPullRequestContributionsPercentage: 0,
    totalCommitContributionsPercentage: 0,
    totalIssueContributionsPercentage: 0,
    repositories: [],
  });

  useEffect(() => {
    fetchGithubStats('jugshaurya').then((stats) => setStats(stats));
  }, []);

  useEffect(() => {
    fetchGithubSvg('jugshaurya').then((svg) => setSvg(svg));
  }, []);

  const {
    totalStars,
    totalIssues,
    totalCommits,
    totalPRs,
    userSelfPRs,
    userContribPRs,
    totalContributedTo,
    contributionRepos,
    totalPullRequestContributionsPercentage,
    totalCommitContributionsPercentage,
    totalIssueContributionsPercentage,
    repositories,
  } = stats;

  return (
    <GithubSection id="stats">
      <FloatingImage
        src={GithubBackground}
        alt={'Wallpaper'}
        style={{ transform: 'rotate(180deg)' }}
        t={[
          '-620px',
          '-480px',
          '-300px',
          '-220px',
          '-110px',
          '-110px',
          '-80px',
        ]}
        l={[0, 0, 0, 0, 0, 0, 0]}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        zi={-3}
      />
      <Container>
        <Title
          IconComp={GithubGradIcon}
          iconDesc={'Github Stats'}
          w={'36'}
          h={'36'}
        />
        <GithubActions>
          <GithubAction>
            <GithubType className="text-small">
              <Icon
                w={'24'}
                h={'24'}
                m={'0 8px 0 0'}
                src={ContributionIcon}
                alt={'Contributed to'}
              />
              Contributed to
            </GithubType>
            <Counter>
              <CountUp start={0} end={totalContributedTo} duration={5} />
            </Counter>
          </GithubAction>
          <GithubAction className="pr">
            <Counter>
              <CountUp start={0} end={totalPRs} duration={5} />
            </Counter>
            <GithubType>
              <Icon
                w={'24'}
                h={'24'}
                m={'0 8px 0 0'}
                src={PRIcon}
                alt={'PRs'}
              />
              PRs
            </GithubType>
          </GithubAction>
          <GithubAction className="stars">
            <GithubType>
              <Icon
                w={'24'}
                h={'24'}
                m={'0 8px 0 0'}
                src={StarsIcon}
                alt={'Stars'}
              />
              Stars
            </GithubType>
            <Counter>
              <CountUp start={0} end={totalStars} duration={5} />
            </Counter>
          </GithubAction>
          <GithubAction>
            <Counter>
              <CountUp start={0} end={totalIssues} duration={5} />
            </Counter>
            <GithubType>
              <Icon
                w={'24'}
                h={'24'}
                m={'0 8px 0 0'}
                src={IssueIcon}
                alt={'Issues'}
              />
              Issues
            </GithubType>
          </GithubAction>
          <GithubAction>
            <GithubType>
              <Icon
                w={'24'}
                h={'24'}
                m={'0 8px 0 0'}
                src={CommitIcon}
                alt={'Commits'}
              />
              Commits
            </GithubType>
            <Counter>
              <CountUp start={0} end={totalCommits} duration={5} />
            </Counter>
          </GithubAction>
        </GithubActions>
      </Container>

      <Container>
        <GithubSvgSection>
          <GithubActivityOverview
            githubContribSvg={svg}
            githubInfo={{
              totalPRsPercentage: totalPullRequestContributionsPercentage,
              totalIssuePercentage: totalIssueContributionsPercentage,
              totalCommitPercentage: totalCommitContributionsPercentage,
              orgs: contributionRepos,
              repos: repositories,
            }}
          />
        </GithubSvgSection>
        <WakatimeStats>
          <Figure>
            <Embed src="https://wakatime.com/share/@jugshaurya/a750f08f-2404-4f77-8df8-849d0a8f4109.svg" />
          </Figure>
        </WakatimeStats>

        <FloatingImage
          src={DotPattern1}
          alt={'Dot Pattern 1'}
          style={{ transform: 'rotate(-9deg)' }}
          t={['10%', '1%', '10%', '10%', '10%', '10%', '10%']}
          l={['3%', '-3%', '3%', '3%', '3%', '3%', '3%']}
          w={['20%', '30%', '20%', '30%', '20%', '30%', '20%']}
          zi={[-2]}
          o={['0.6', '0.6', '0.6', '0.6', '0', '0', '0']}
        />
        <FloatingImage
          src={DotPattern2}
          alt={'Dot Pattern 2'}
          style={{ transform: 'rotate(-15deg)' }}
          b={['5%', '5%', '5%', '5%', '5%', '5%', '5%']}
          r={['5%', '1%', '5%', '5%', '5%', '5%', '5%']}
          w={['20%', '30%', '20%', '20%', '20%', '20%', '20%']}
          o={['0.6', '0.6', '0.6', '0.6', '0', '0', '0']}
          zi={[-2]}
        />
        <FloatingImage
          src={Lady}
          alt={'Lady'}
          t={['15%', '5%', '5%', '15%', '15%', '15%', '15%']}
          l={['0', '-10%', '-15%', '-15%', '0', '0', '0']}
          w={['40%', '40%', '40%', '40%', '40%', '40%', '40%']}
          h={['30%', '30%', '30%', '30%', '30%', '30%', '30%']}
          o={['1', '1', '1', '1', '0', '0', '0']}
        />
        <FloatingImage
          src={Boy}
          alt={'Boy'}
          b={['10%', '10%', '5%', '10%', '10%', '10%', '10%']}
          r={['5%', '5%', '5%', '5%', '5%', '5%', '5%']}
          w={['20%', '20%', '20%', '20%', '20%', '20%', '20%']}
          h={['20%', '20%', '20%', '20%', '20%', '20%', '20%']}
          o={['1', '1', '1', '1', '0', '0', '0']}
        />
      </Container>
      {/* Rendering only top 30 results */}
      <LatestPRs
        userSelfPRs={userSelfPRs.slice(0, 30)}
        userContribPRs={userContribPRs.slice(0, 30)}
      />
    </GithubSection>
  );
};

export default Github;
