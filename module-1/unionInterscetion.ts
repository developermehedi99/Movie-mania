{
type FrontendDeveloper = {
    skills: string[];
    design1: 'frontend';
}

type BackendDeveloper = {
    skills: string[];
    design2: 'backend';
}

// Union Type - Can be either FrontendDeveloper or BackendDeveloper
type Developer = FrontendDeveloper | BackendDeveloper;

const developer: Developer = {
    skills: ['html', 'css', 'js', 'react'],
    design1: 'frontend',  // This is valid for a FrontendDeveloper
}

// Intersection Type - Must have properties from both FrontendDeveloper and BackendDeveloper
type FullStack = FrontendDeveloper & BackendDeveloper;

const fullStack: FullStack = {
    skills: ['all skills if needed', 'js'],
    design1: 'frontend',
    design2: 'backend'
}
}
