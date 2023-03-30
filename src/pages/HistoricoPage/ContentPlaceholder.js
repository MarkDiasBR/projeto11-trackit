import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const loaderWidth = window.innerWidth - 34;

const TaskList = props => {
    return (
      <ContentLoader
        speed={1}
        width={`${loaderWidth}`}
        height={400}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
          <rect x="0" y="0" rx="10" ry="10" width={`${loaderWidth}`} height="400" />
      </ContentLoader>
    )
}

const MasterDiv = styled.div`
    margin: 12px auto 0;
    padding: 0;
`

export default function ContentPlaceholder({ carregando }) {

    return (
        <MasterDiv>
            {carregando ? <TaskList /> : ""}
        </MasterDiv>
    )
}