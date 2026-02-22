import WorkspaceSelector from './WorkspaceSelector';
import './Home.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { useCurrentUserStore } from '../../modules/auth/current-user.state';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { workspaceRepository } from '../../modules/workspaces/workspace.repository';
import { Workspace } from '../../modules/workspaces/workspace.entity';

function Home() {
  const { currentUser } = useCurrentUserStore();
  const [workspaces, setWorkspace] = useState<Workspace[]>([]);
  const params = useParams();
  const { workspaceId } = params;
  const selectedWorkspace = workspaces.find(
    (workspace) => workspace.id === workspaceId
  );

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const fetchWorkspaces = async () => {
    try {
      const workspaces = await workspaceRepository.find();
      setWorkspace(workspaces);
    } catch (error) {
      console.error('ワークスペースの取得に失敗しました。', error);
    }
  }

  if (currentUser === undefined) return <Navigate to="/signin" />;
  return (
    <div className="slack-container">
      <WorkspaceSelector
        workspaces={workspaces}
        setWorkspaces={setWorkspace}
        selectedWorkspaceId={workspaceId!}/>
        {selectedWorkspace != null ? (
          <>
            <Sidebar selectedWorkspace={selectedWorkspace} />
            <MainContent />
          </>
        ) : (
          <div className='sidebar' />
        )}
    </div>
  );
}

export default Home;
