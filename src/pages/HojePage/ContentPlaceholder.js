import ContentLoader from 'react-content-loader'
import styled from 'styled-components';

const loaderWidth = window.innerWidth - 34;

const TaskList = props => {
    return (
      <ContentLoader
        speed={1}
        width={`${loaderWidth}`}
        height={406}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
          <rect x="0" y="0" rx="5" ry="5" width={`${loaderWidth}`} height="94" />
          <rect x="0" y="106" rx="5" ry="5" width={`${loaderWidth}`} height="94" />
          <rect x="0" y="212" rx="5" ry="5" width={`${loaderWidth}`} height="94" />
          <rect x="0" y="318" rx="5" ry="5" width={`${loaderWidth}`} height="94" />
      </ContentLoader>
    )
}

const MasterDiv = styled.div`
    margin: 20px auto ;
    padding: 0;
`

export default function ContentPlaceholder({ carregando }) {

    return (
        <MasterDiv>
            {carregando ? <TaskList /> : ""}
        </MasterDiv>
    )
}