import { environment } from 'src/environments/environment';

const backendURL = environment.backendURL;

export const tasksURL = `${backendURL}/tasks`;
export const allProjectsURL = `${backendURL}/search/project/all`;
export const TFRLocationCountURL = `${backendURL}/tfrLocationCount`;
export const TFRStatusCountURL = `${backendURL}/projects/statusCount`;
export const vendorsURL = `${backendURL}/vendors`;
export const vendorsURLdupe = `${backendURL}/search/vendors/all`;
export const projectSearchURL = `${backendURL}/search/project`;
export const registrationURL = `${backendURL}/register`;
export const loginURL = `${backendURL}/login`;
export const resourceRolesURL = `${backendURL}/resources/roles`;
export const resourceProjectsURL = `${backendURL}/resources/projects`;
export const TFRCreationResourceURL = `${backendURL}/resources/all/tfr-creation-resource`;
export const projectsURL = `${backendURL}/projects`;
export const approachingProjectsURL = `${backendURL}/ProjectsStartingInAWeek`;
export const vendorProjectCountURL = `${backendURL}/VendorProjectCount`;
