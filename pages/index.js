import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Test Next</h1>
      <Link href='/posts'><a>Posts</a></Link>
    </div>
  )
}

export default Index
