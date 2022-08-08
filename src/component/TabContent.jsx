import React from 'react'

function TabContent({ tab }) {
	return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
}

export default TabContent
