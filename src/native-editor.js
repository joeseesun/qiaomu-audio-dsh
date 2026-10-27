import {EditorState} from '@codemirror/state';
import {EditorView,keymap,highlightActiveLine} from '@codemirror/view';
import {history,defaultKeymap,historyKeymap} from '@codemirror/commands';
import {markdown} from '@codemirror/lang-markdown';
import {audioEditorExtension} from './original/obsidian/editor-extension.js';
export function createEditor(parent,{text='',onChange,onSelection,onDocumentChange}={}){
 const cm=new EditorView({parent,state:EditorState.create({doc:text,extensions:[history(),markdown(),highlightActiveLine(),keymap.of([...defaultKeymap,...historyKeymap]),EditorView.lineWrapping,audioEditorExtension(onDocumentChange,onSelection),EditorView.updateListener.of(update=>{if(update.docChanged)onChange?.(update.state.doc.toString());}),EditorView.theme({'&':{height:'100%'},'.cm-scroller':{overflow:'auto',fontFamily:'inherit',lineHeight:'1.8'},'.cm-content':{padding:'24px',maxWidth:'900px',margin:'0 auto',width:'100%'},'&.cm-focused':{outline:'none'},'.cm-gutters':{background:'transparent',border:'none'}})]})});
 const offsetToPos=(offset)=>{const at=Math.max(0,Math.min(offset,cm.state.doc.length)),line=cm.state.doc.lineAt(at);return {line:line.number-1,ch:at-line.from};};
 const posToOffset=pos=>{const line=cm.state.doc.line(Math.max(1,Math.min(pos.line+1,cm.state.doc.lines)));return Math.min(line.to,line.from+pos.ch);};
 return {cm,offsetToPos,posToOffset,getValue:()=>cm.state.doc.toString(),setValue:text=>cm.dispatch({changes:{from:0,to:cm.state.doc.length,insert:text}}),somethingSelected:()=>!cm.state.selection.main.empty,getSelection:()=>cm.state.sliceDoc(cm.state.selection.main.from,cm.state.selection.main.to),getCursor:which=>offsetToPos(cm.state.selection.main[which==='from'?'from':which==='to'?'to':'head']),lineCount:()=>cm.state.doc.lines,getLine:line=>cm.state.doc.line(line+1).text,setCursor:pos=>cm.dispatch({selection:{anchor:posToOffset(pos)}}),replaceRange:(text,from,to=from)=>cm.dispatch({changes:{from:posToOffset(from),to:posToOffset(to),insert:text}}),scrollIntoView:range=>cm.dispatch({effects:EditorView.scrollIntoView(posToOffset(range.from),{y:'center'})}),focus:()=>cm.focus(),destroy:()=>cm.destroy()};
}
