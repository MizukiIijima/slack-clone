import '../Signup/auth.css';
import CreateWorkspaceModal from '../Home/WorkspaceSelector/CreateWorkspaceModal';
import { useCurrentUserStore } from '../../modules/auth/current-user.state';
import { Navigate } from 'react-router-dom';
import { workspaceRepository } from '../../modules/workspaces/workspace.repository';

function CreateWorkspace() {
  const { currentUser } = useCurrentUserStore();

  const CreateWorkspace = async (name: string) => {
    try {
      const newWorkspace = await workspaceRepository.create(name);
      console.log(newWorkspace);
    } catch (error) {
      console.error("ワークスペースの作成に失敗しました。", error)
    }
  }
  console.log(`val: ${currentUser}`)
  if (currentUser === undefined) return <Navigate to="/signin" />;
  return (
    <div>
      <CreateWorkspaceModal onSubmit={CreateWorkspace}/>
    </div>
  );
}

export default CreateWorkspace;
