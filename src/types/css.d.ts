// Type declarations for importing CSS and similar style files in TypeScript
// This allows side-effect imports like `import './globals.css'` in Next.js

declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'

// For CSS modules that export a mapping of class names
declare module '*.module.css' {
  const classes: { [className: string]: string }
  export default classes
}
declare module '*.module.scss' {
  const classes: { [className: string]: string }
  export default classes
}
declare module '*.module.sass' {
  const classes: { [className: string]: string }
  export default classes
}
