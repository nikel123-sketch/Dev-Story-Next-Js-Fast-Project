import Title from '@/components/Title/Title';
import React from 'react';

const TutoriusPages = async({params}) => {
  // console.log(result)
  // const [app, getting, started] = await params.slag;
    
    const {slug}=await params;
    
    console.log(slug)
    return (
      <div>
        <Title>this is TutoriusPages</Title>
        
      </div>
    );
};

export default TutoriusPages;