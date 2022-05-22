import React, { type ReactNode } from "react";

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl?: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a className="button button--secondary" href={githubUrl}>
                GitHub
              </a>
            )}
            {twitterUrl && (
              <a className="button button--secondary" href={twitterUrl}>
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ludvig Lundgren👋"
        githubUrl="https://github.com/ludviglundgren"
      >
        {
          "Creator of autobrr and qbittorrent-cli👨‍💻 Eternal master of everything 🤷‍♂️"
        }
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="stacksmash76👋"
        githubUrl="https://github.com/stacksmash76"
      >
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, libero vitae fringilla sagittis, elit nulla tincidunt enim, nec facilisis risus justo id nunc."
        }
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Greg Troar👋"
        githubUrl="https://github.com/GregTroar"
      >
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, libero vitae fringilla sagittis, elit nulla tincidunt enim, nec facilisis risus justo id nunc."
        }
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Kyle Sanderson👋"
        githubUrl="https://github.com/KyleSanderson"
      >
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, libero vitae fringilla sagittis, elit nulla tincidunt enim, nec facilisis risus justo id nunc."
        }
      </TeamProfileCardCol>
    </div>
  );
}

export function ContributorsTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="placeholder"
        githubUrl="https://autobrr.com">
        {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, libero vitae fringilla sagittis, elit nulla tincidunt enim, nec facilisis risus justo id nunc."
        }
        </TeamProfileCardCol>
      <TeamProfileCardCol
        name="placeholder"
        githubUrl="https://autobrr.com">
        {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, libero vitae fringilla sagittis, elit nulla tincidunt enim, nec facilisis risus justo id nunc."
        }
        </TeamProfileCardCol>
    </div>
  );
}
