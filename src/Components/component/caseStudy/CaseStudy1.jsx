// pages/case-study-1.js
import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {caseStudyData} from './caseStudy.json'

export default function CaseStudyOne() {
  return <CaseStudy data={caseStudyData.case1} />;
}

// pages/case-study-2.js
import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {caseStudyData} from './caseStudy.json'

export default function CaseStudyTwo() {
  return <CaseStudy data={caseStudyData.case2} />;
}
// pages/case-study-2.js
import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {caseStudyData} from './caseStudy.json'

export default function CaseStudyThree() {
  return <CaseStudy data={caseStudyData.case2} />;
}
// pages/case-study-2.js
import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {caseStudyData} from './caseStudy.json'

export default function CaseStudyFour() {
  return <CaseStudy data={caseStudyData.case2} />;
}

// Similar structure for case-study-3.js and case-study-4.js