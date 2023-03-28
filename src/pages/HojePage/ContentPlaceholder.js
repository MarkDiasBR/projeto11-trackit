import { ContentLoader } from 'react-content-loader'
import styled from 'styled-components';

const loaderWidth = window.innerWidth - 34;

const TaskList = props => {
    return (
      <ContentLoader
        speed={1}
        width={`${loaderWidth}`}
        height={414}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
          <rect x="0" y="0" rx="5" ry="5" width={`${loaderWidth}`} height="96" />
          <rect x="0" y="106" rx="5" ry="5" width={`${loaderWidth}`} height="96" />
          <rect x="0" y="212" rx="5" ry="5" width={`${loaderWidth}`} height="96" />
          <rect x="0" y="318" rx="5" ry="5" width={`${loaderWidth}`} height="96" />
      </ContentLoader>
    )
}

const MasterDiv = styled.div`
    margin: 20px auto 0;
    padding: 0;
`

export default function ContentPlaceholder({ carregando }) {

    return (
        <MasterDiv>
            {carregando ? <TaskList /> : ""}
        </MasterDiv>
    )
}