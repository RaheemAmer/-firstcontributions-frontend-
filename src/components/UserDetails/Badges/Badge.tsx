import { graphql, useFragment } from 'react-relay'
import { Badge_node$key } from '../../../queries/__generated__/Badge_node.graphql'
import BadgeIcon, { LanguageName } from './BadgeIcon'
import Hexagon from './Hexagon'

const Badge = ({ badge }: { badge: Badge_node$key }) => {
  const data = useFragment(
    graphql`
      fragment Badge_node on Badge {
        displayName
        progressPercentageToNextLevel
        currentLevel
      }
    `,
    badge
  )

  return (
    <div className="flex items-center ">
      <Hexagon size={36} color="red">
        <BadgeIcon displayName={data.displayName as LanguageName} />
      </Hexagon>
      <div className=" ml-8 dark:text-gray-300">
        <span className="font-bold block">Level: {data.currentLevel}</span>
        <span className="text-xs block">524 lines to next level</span>
        <div className="progress-bar">
          <style jsx>
            {`
              .progress-bar {
                position: relative;
                height: 10px;
                width: 100px;
                background-color: #ccc;
                border-radius: 5px;
                box-shadow: inset 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
              }
              .progress-bar:after {
                content: '';
                position: absolute;
                width: ${data.progressPercentageToNextLevel}px;
                height: inherit;
                background-color: red;
                border-radius: 5px;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  )
}

export default Badge
