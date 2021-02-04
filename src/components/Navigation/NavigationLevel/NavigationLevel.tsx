import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import subLevelsConfig from '../../../assets/sublevels.json';
import { changeCurrentNode } from '../../../store/actions/actions';

interface NavigationLevelProps extends PropsFromRedux {
  id: string;
  index: number;
  title: string;
  subLevels: string[];
}

const NavigationLevelRaw = (props: NavigationLevelProps): JSX.Element => {
  const {
    id,
    index,
    title,
    subLevels,
  } = props;

  const levelSubLevels = subLevelsConfig
    .filter((subLevel) => subLevels.includes(subLevel.id));

  return (
    <>
      <div key={id}>
        <button
          type="button"
          onClick={() => props.changeCurrentNode({
            nodeId: subLevels[0] ?? '',
            isSubLevel: !!subLevels[0],
          })}
        >
          {`${index + 1}. ${title}`}
        </button>
        <ul>
          {levelSubLevels.map((subLevel, subLevelIndex) => (
            <li
              key={subLevel.id}
            >
              <button
                type="button"
                onClick={() => props.changeCurrentNode({
                  nodeId: subLevel.id,
                  isSubLevel: true,
                })}
              >
                {`${index + 1}.${subLevelIndex + 1}. ${subLevel.title}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapDispatch = {
  changeCurrentNode,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const NavigationLevel = connector(NavigationLevelRaw);
