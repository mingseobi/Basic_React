import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name={"ㅎㅇㅎㅇ"} comment={"안녕하세요, 소플입니다."} />
      <Comment name={"ㅋㅋ"} comment={"ㅎㅇ, 소플입니다."} />
    </div>
  );
}

export default CommentList;
