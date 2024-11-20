import { Route, Routes } from 'react-router-dom';

import Projects from '../pages/Projects'; 
import Languages from '../pages/Languages'; 
import ProjectsSheet from '../pages/ProjectsSheet'; 
import Formation from '../pages/Formation';
import About from '../pages/About';  


function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Projects />} />  {/* Route pour la page d'accueil */}
            <Route path='/languages' element={<Languages />} />  {/* Route pour la page à propos */}
            <Route path='/projects/:id' element={<ProjectsSheet />} />  {/* Route pour la fiche de projet avec ID dynamique */}
            <Route path='/formation' element={<Formation />} />  {/* Route pour la page formation */}
            <Route path='/about' element={<About />} />  {/* Route pour la page formation */}
        </Routes>
    );
}

export default AppRoutes;