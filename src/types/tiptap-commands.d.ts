import "@tiptap/core"

declare module "@tiptap/core" {
  interface ChainedCommands {
    unsetFontFamily: () => ChainedCommands
    setFontFamily: (value: string) => ChainedCommands

    toggleBold: () => ChainedCommands
    toggleItalic: () => ChainedCommands
    toggleUnderline: () => ChainedCommands
    toggleStrike: () => ChainedCommands
    toggleCode: () => ChainedCommands
    toggleSubscript: () => ChainedCommands
    toggleSuperscript: () => ChainedCommands

    setParagraph: () => ChainedCommands
    toggleHeading: (options: { level: 1 | 2 | 3 | 4 | 5 | 6 }) => ChainedCommands

    toggleBulletList: () => ChainedCommands
    toggleOrderedList: () => ChainedCommands
    toggleBlockquote: () => ChainedCommands
    setHorizontalRule: () => ChainedCommands

    setLink: (options: { href: string }) => ChainedCommands
    unsetLink: () => ChainedCommands

    setTextAlign: (alignment: "left" | "center" | "right" | "justify") => ChainedCommands

    undo: () => ChainedCommands
    redo: () => ChainedCommands

    toggleHighlight: (options?: { color?: string }) => ChainedCommands
    unsetHighlight: () => ChainedCommands
  }

  interface CanCommands {
    undo: () => boolean
    redo: () => boolean
  }
}
