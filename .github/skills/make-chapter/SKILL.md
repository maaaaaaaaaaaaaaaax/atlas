---
name: make-chapter
description: From a pasted chapter create a chapter component
---

You receive a pasted chapter, it may look like this:

```
A statement on the methodology

Due to the methodology of this research requiring political grounding, a definition and investigation of the term "technofascism" shall be established. It is one of the core issues this research is trying to identify within the context of sabotage against AI.
"Technofascism" is a term that has only recently been coined, most prominently by
```

The initial text line is the chapters name.
Everything else is the chapters text. Determine where the breaks are. I write this in google Docs and use a return for each break in the chapter.
Text advanced by "\*" is a footnote, use the `<Footnote>text</Footnote>` component. Text advanced by - is part of a list use the `<List><ListItem index={1}>text</ListItem></List>` component. Keep <p> tags as long as possible use <Br /> inside the <p> tags. Only special components live outside of the <p> tag, like Lists, Headings, Images.

1. Fetch the chapter name
2. Fetch each paragraph, seperated by returns
3. Inside `code/thesis/src/chapters create a new subfolder with the chapter name
4. Create a tsc comp with the chapters name
5. The chapters name is h2
6. Position each paragraph into the text, wrap all of them using a <p> elemnt, break the paragraphs with the <Br /> component
7. Replace any footnotes indicated by "\*" with the `<Footnote>text</Footnote>` component

Follow the naming schemes of my project
