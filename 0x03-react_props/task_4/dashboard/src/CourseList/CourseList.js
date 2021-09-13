import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'

function CourseList() {
  return(
    <table id='CourseList'>
      <thead>
        <tr>
          <CourseListRow textFirstCell={'Available course'} isHeader={true}></CourseListRow>
          <CourseListRow textFirstCell={'Course name'} textSecondCell={'Credit'} isHeader={true}></CourseListRow>
        </tr>
      </thead>
      <tbody>
        <tr>
          <CourseListRow textFirstCell={'ES6'} textSecondCell={'60'} isHeader={false}></CourseListRow>
          <CourseListRow textFirstCell={'Webpack'} textSecondCell={'20'} isHeader={false}></CourseListRow>
          <CourseListRow textFirstCell={'React'} textSecondCell={'40'} isHeader={false}></CourseListRow>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseList;
