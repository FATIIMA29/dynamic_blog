import React, {useState} from 'react';
import {Card, CardContent} from '../components/ui/card';
import {Input} from '../components/ui/input'
import {Button} from '../components/ui/button'

interface Comment{ 
  id:string;
  author:string;
  text:string;
}
interface CommentSectionProps{
  postId:string;
}
export default function CommentSection({ postId }:CommentSectionProps) {
  const [comments, setComments]=useState<Comment[]>([]);
  const [newComment, setNewComments]= useState('');
  const [authorName, setAuthorName]= useState('');
 const [editingCommentId, setEditingCommmentId]=useState<string | null>(null);

 const handleAddComment = () =>{
  if (newComment.trim() && authorName.trim()){
    const newCommentObj: Comment={
      id:new Date().toISOString(),
      author:authorName,
      text:newComment,
    };
    setComments([...comments,newCommentObj]);
    setNewComments('');
    setAuthorName('')
  }
 };

 const handleEditComment = (commentID:string) =>{
  const commentToEdit = comments.find((comment)=> comment.id === commentID);
  if (commentToEdit){
    setNewComments(commentToEdit.text);
    setNewComments(commentToEdit.author);
    setEditingCommmentId(commentID);
  }
 };

 const handleSavedEditedComment = () =>{
  if (newComment.trim() && authorName.trim() && editingCommentId){
    const updatedComments = comments.map((comments)=>
    comments.id === editingCommentId ? { ...comments, text:newComment, author:authorName}
  :comments
);
  setComments(updatedComments);
  setNewComments('');
  setAuthorName('');
  setEditingCommmentId(null);
}
};

return(
  <div className='mt-8'>
    <h2 className='text-2xl font-semibold '>Comments</h2>
    <div className='mt-4 space-y-4'>
      {comments.length > 0 ?(
       comments.map((comment)=>(
        <Card key= {comment.id}>
          <CardContent className='font-semibold'>{comment.author}
          <p>{comment.text}</p>
          <Button onClick={()=> handleEditComment(comment.id)}
          className='mt-2 text-blue-500'>
            Edit
          </Button>
          </CardContent>
        </Card>
       ))
      ):(
        <p className='text-grey'>
          No comment yet
        </p>
      ) }
    </div>
 
 <div className='mt-6'>
  <Input
  type='text'
  value={authorName}
  onChange={(e)=>setAuthorName(e.target.value)}
  placeholder='Your name'
  className='w-full mb-2'
  />

<Input
  type='text'
  value={newComment}
  onChange={(e)=>setNewComments(e.target.value)}
  placeholder='Add a comment'
  className='w-full mb-2'
  />
  <Button
  onClick={editingCommentId ? handleSavedEditedComment : handleAddComment}
  className='mt-4'>
  {editingCommentId ? 'Save' : 'Submit'}
  

  </Button>

 </div>
 
 
  </div>
)
}


