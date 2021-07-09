const configJSON = `{
  "customFields":[
	 ["internalTitle","getElementById('edit-title-wrapper')","editInput"],
	 ["externalTitle","getElementById('edit-field-product-label-wrapper')","editInput"],
	 ["bazaavoiceProductID","getElementById('edit-field-product-bv-id-wrapper')","editInput"],
	 ["GTIN","getElementById('edit-field-dsu-sku-wrapper')","editInput"],
	 ["buyNowFusepump","getElementById('edit-field-product-fusepump-wrapper')","editInput"],
	 ["newsletter","getElementById('edit-field-product-newsletter-wrapper')","editSelect"],
	 ["headLine","getElementById('edit-field-product-headline-wrapper')","editInput"],
	 ["highlights","getElementById('edit-field-product-highlight-wrapper')","editInputsGroup",4],
	 ["productSize","getElementById('edit-field-product-size-wrapper')","editInputsGroup"],
	 ["productOverview","getElementById('edit-group-product-detail')","editEditorsGroup"],
	 ["ingredientsAndNutrition","getElementById('edit-field-product-nutrition-wrapper')","editEditorsGroup"],
	 ["feedingGuide","getElementById('edit-field-product-feeding-guide-wrapper')","editEditorsGroup"],
	 ["petType","getElementById('edit-field-product-pet-type-wrapper')","editRadioBtn"],
	 ["brand","getElementById('edit-field-product-brand-wrapper')","editSelect"],
	 ["categories","getElementById('edit-field-product-category-wrapper')","editSelectsGroup"],
	 ["lifestages","getElementById('edit-field-product-lifestage-wrapper')","editSelectsGroup"],
	 ["ingredients","getElementById('edit-field-product-ingredient-wrapper')","editSelectsGroup"],
	 ["conditions","getElementById('edit-field-product-condition-wrapper')","editSelectsGroup"],
	 ["specialNeeds","getElementById('edit-field-product-special-need-wrapper')","editSelectsGroup"],
	 ["ranges","getElementById('edit-field-product-range-wrapper')","editCheckbox"]
  ],
  "seoFields":[
	 ["pageTitle","getElementsByClassName('form-item-field-meta-tags-0-basic-title')[0]","editSeoField"],
	 ["pageDescription","getElementsByClassName('form-item-field-meta-tags-0-basic-description')[0]","editSeoField"],
	 ["openGraphTitle","getElementsByClassName('form-item-field-meta-tags-0-open-graph-og-title')[0]","editSeoField"],
	 ["openGraphDescription","getElementsByClassName('form-item-field-meta-tags-0-open-graph-og-description')[0]","editSeoField"],
	 ["urlAlias","getElementsByClassName('form-item-path-0-alias')[0]","editSeoField"]
  ],
  "copydeck":{
	 "test":"some value"
  }
}`

const config = JSON.parse(configJSON)

/*
 *Snippet GUI start
 */
const addedColor = '#f2ffe4'
const notAddedColor = '#ffe2d0'

const bodyNode = document.querySelector('body')
const headNode = document.querySelector('head')

const snippetMainContainer = document.createElement('div')
const snippetControlContainer = document.createElement('div')
const snippetControlLeftSide = document.createElement('div')
const snippetControlRightSide = document.createElement('div')
const snippetInput = document.createElement('INPUT')
const snippetBtnContainer = document.createElement('div')
const snippetAddSeoBtn = document.createElement('button')
const snippetAddCustomBtn = document.createElement('button')
const snippetAddAllBtn = document.createElement('button')
const snippetMessageContainer = document.createElement('ul')
const snippetGoBtn = document.createElement('button')

const snippetLoaderContainer = document.createElement('div')
const snippetLoader = document.createElement('div')
const snippetLoaderMessage = document.createElement('div')
const loaderStyle = document.createElement('style')

const snippetPageView = document.createElement('iframe')
const snippetNavContainer = document.createElement('div')
const snippetUrl = document.createElement('input')

let snippetMessages = []

snippetLoader.classList.add('loader')
snippetLoader.classList.innerHTML = `Loading...`

loaderStyle.innerHTML = `.loader, 
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
	 box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
	 box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
	 box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
	 box-shadow: 0 2.5em 0 0;
  }
}`

snippetLoaderMessage.innerHTML = 'some message'

headNode.append(loaderStyle)

snippetLoaderContainer.style.cssText = `position: absolute; height: 100%; width: 100%;
											 background-color: #e81c24; display:none; align-items: center;
											 justify-content: center; flex-direction: column;`

snippetLoaderMessage.style.cssText = `color: #ffffff;`

const snippetBtnStyle =
	'outline: none; border: 0; border-radius: 20px; color: white; margin: 0 5px; line-height: 10px; outline: none;'

snippetAddSeoBtn.id = 'snippetAddSeoBtn'
snippetAddSeoBtn.innerHTML = 'Add SEO'
snippetAddSeoBtn.style.cssText = `background-color: #0079c3; ${snippetBtnStyle}`

snippetAddCustomBtn.id = 'snippetAddCustomBtn'
snippetAddCustomBtn.innerHTML = 'Add custom'
snippetAddCustomBtn.style.cssText = `background-color: #69aa00; ${snippetBtnStyle}`

snippetAddAllBtn.id = 'snippetAddAllBtn'
snippetAddAllBtn.innerHTML = 'Add all'
snippetAddAllBtn.style.cssText = `background-color: red; ${snippetBtnStyle}`

snippetInput.placeholder = 'Insert the data from the copydeck here...'

snippetBtnContainer.style.cssText = ` padding: 0 10px; display:flex;  justify-content:space-between`

snippetMainContainer.style.cssText = `position: fixed; display:flex; align-items: center;
												left: 0; top: 0; width:100%; height: 100%; flex-direction: column;
												z-index: 999999; background-color: #121a23; `

snippetControlContainer.style.cssText = `width:100%; height:70px; display:flex; padding: 0 5px`

snippetControlLeftSide.style.cssText = `display: flex; justify-content: center; align-items: center; padding: 7px 0;`

snippetPageView.style.cssText = `width:100%; height: calc(100% - 146px); `

snippetNavContainer.style.cssText = `width: 100%;  padding: 20px 5px; background-color: #0f0f0f; display: flex; justify-content: center;`

snippetUrl.style.cssText = `border-radius: 20px 0 0 20px; padding:  5px 20px; text-align: center; outline: none;
									color: #fff; border: 1px solid #69aa00; background-color: #0f0f0f; width: 70%`

snippetGoBtn.style.cssText = `border-radius: 0 20px 20px 0; padding:  5px 20px; text-align: center;
									color: #fff; border: 1px solid #69aa00; background-color: #69aa00; outline: none;`

snippetInput.style.cssText = `width: 400px; border-radius:  20px; resize: none; padding: 4px 10px; outline: none; background-color: #0f0f0f;
										border: 1px solid #00385a; color: #fff;`

/*snippetPageView.setAttribute(
	'src',
	'https://dev-74941-petcare-purinattt-germany.pantheonsite.io/node/9937/edit'
)*/
snippetPageView.setAttribute('src', `${window.location.origin}/admin/content`)

snippetUrl.value = 'URL'
snippetGoBtn.innerHTML = 'GO'

snippetControlContainer.append(snippetControlLeftSide)
snippetControlContainer.append(snippetControlRightSide)

snippetControlLeftSide.append(snippetInput, snippetBtnContainer)
snippetBtnContainer.append(
	snippetAddSeoBtn,
	snippetAddCustomBtn,
	snippetAddAllBtn
)

snippetNavContainer.append(snippetUrl)
snippetNavContainer.append(snippetGoBtn)
snippetLoaderContainer.append(snippetLoader)
snippetLoaderContainer.append(snippetLoaderMessage)

snippetMainContainer.append(snippetControlContainer)
snippetMainContainer.append(snippetNavContainer)
snippetMainContainer.append(snippetLoaderContainer)
snippetMainContainer.append(snippetPageView)

bodyNode.append(snippetMainContainer)

const snippetObject = {
	hide: () => {
		snippetLoaderContainer.style.display = 'none'
	},
	show: () => {
		snippetLoaderContainer.style.display = 'flex'
	},
}

snippetGoBtn.addEventListener('click', () => {
	snippetPageView.contentWindow.location.href = snippetUrl.value
})

/*
 *Snippet GUI end
 */

/** Configurations */

/*
 *Snippet Add Product logic start
 */

let initCustomFieldsFlag = false
let initSeoFieldsFlag = false

snippetPageView.addEventListener('load', () => {
	snippetUrl.value = snippetPageView.contentWindow.location.href
	initCustomFieldsFlag = false
	initSeoFieldsFlag = false
})

snippetPageView.addEventListener('click', () => {
	snippetUrl.value = snippetPageView.contentWindow.location.href
	initCustomFieldsFlag = false
	initSeoFieldsFlag = false
})

snippetAddCustomBtn.addEventListener('click', async function () {
	snippetLoaderContainer.style.display = 'flex'
	await parseDataToArray()
	await initFields(config.customFields, initCustomFieldsFlag)
	await editFields(config.customFields)
	setAuthor()
	snippetLoaderContainer.style.display = 'none'
	initCustomFieldsFlag = true
})

snippetAddSeoBtn.addEventListener('click', async function () {
	snippetLoaderContainer.style.display = 'flex'
	await parseDataToArray()
	await initFields(config.seoFields, initSeoFieldsFlag)
	await editFields(config.seoFields)
	setAuthor()
	snippetLoaderContainer.style.display = 'none'
	initSeoFieldsFlag = true
})

snippetAddAllBtn.addEventListener('click', async function () {
	snippetLoaderContainer.style.display = 'flex'
	await parseDataToArray()
	await initFields(config.customFields, initCustomFieldsFlag)
	await editFields(config.customFields)
	await initFields(config.seoFields, initSeoFieldsFlag)
	await editFields(config.seoFields)
	setAuthor()
	snippetLoaderContainer.style.display = 'none'
	initCustomFieldsFlag = true
	initSeoFieldsFlag = true
})

let copydeckAllData = []
let copydeckData = []

async function parseDataToArray() {
	copydeckAllData = []

	for await (const column of snippetInput.value.split('	\n')) {
		copydeckAllData.push(column.split('\t'))
	}

	copydeckData = copydeckAllData[0]
}

async function initFields(fields, flag) {
	if (!flag) {
		for (const field of fields) {
			await eval(
				`${field[0]}Node = snippetPageView.contentWindow.document.${field[1]}`
			)
		}
	}
}

async function editFields(fields) {
	for (const field of fields) {
		snippetLoaderMessage.innerHTML = `Editing ${field[0].replace(
			/[A-Z]/gm,
			(letter) => ` ${letter.toLowerCase()}`
		)} block ...`

		await eval(
			`${field[2]}(${field[0]}Node,${field[0]}Formatter()${
				field.length === 4 ? ',' + field[3] : ''
			})`
		)
	}
}

async function setAuthor() {
	const authorInput = snippetPageView.contentWindow.document.getElementById(
		'edit-uid-0-target-id'
	)

	const userName =
		snippetPageView.contentWindow.document.getElementById(
			'toolbar-item-user'
		).innerHTML

	const userId = snippetPageView.contentWindow.document
		.querySelector('ul.toolbar-menu li.account-edit a')
		.href.split('/')
		.filter((e) => parseInt(e))[0]

	authorInput.value = `${userName} (${userId})`
}

/**
 *Function for editing block like "PRODUCT OVERVIEW" or "INGREDIENTS & NUTRITION"
 **/
async function editEditorsGroup(node, values, numberOfFields = values.length) {
	clickElement(node.querySelector('input.paragraphs-icon-button'))

	await checkNodeChanges(node)

	const numberOfExtraFields =
		numberOfFields - node.querySelectorAll('.tabledrag-handle').length

	if (numberOfExtraFields > 0) {
		for (let i = 0; i < numberOfExtraFields; i++) {
			clickElement(node.querySelector('input.field-add-more-submit'))
			await checkNodeChanges(
				node.querySelector('input.field-add-more-submit').parentElement
			)
			await waitForChanges()
		}
	} else {
		await waitForChanges()
	}

	let editorIFrames = node.querySelectorAll('iframe')

	for (const [index, iframe] of editorIFrames.entries()) {
		iframe.addEventListener('load', function () {
			let value = values[index] && index < numberOfFields ? values[index] : ''
			iframe.contentWindow.document.querySelector('body').innerHTML = value
		})
	}

	async function waitForChanges() {
		let blockList = node.querySelectorAll('.ajax-new-content .draggable')
		await checkNodeChanges(blockList[blockList.length - 1])
	}
}

/**
 *Function for editing block like "HIGHLIGHT" or "PRODUCT SIZE"
 **/
async function editInputsGroup(node, values, numberOfFields = values.length) {
	const highlightInputs = node.querySelectorAll('input.form-text')

	for (const input of highlightInputs) {
		input.value = ''
	}

	let lastInputIndex = highlightInputs.length - 1

	for (const [index, value] of values.entries()) {
		if (index < numberOfFields) {
			if (index > lastInputIndex) {
				clickElement(node.querySelector('input.button'))
				await checkNodeChanges(node)
				lastInputIndex++
				await editInput(
					node.querySelectorAll('input.form-text')[lastInputIndex]
						.parentElement,
					value
				)
			} else {
				await editInput(highlightInputs[index].parentElement, value)
			}
		}
	}
}

/**
 *Function for editing block like "Headline" or "External title"
 **/
async function editInput(node, value) {
	const nodeInput = node.querySelector('input')
		? node.querySelector('input')
		: node.querySelector('textarea')
	const flag = value || value.trim()

	nodeInput.value = flag ? value : 'Not faund'
	nodeInput.style.backgroundColor = flag ? addedColor : notAddedColor
}

/**
 *Function for editing block like "Newsletter Block" or "PRODUCT SIZE"
 **/
async function editSelect(node, values) {
	let select = node.querySelector('select')
	let matchFound = false

	select.style.background = notAddedColor

	if (values && values.length > 0) {
		for (const option of select.options) {
			let flag =
				values.filter((value) =>
					option.text.toLowerCase().includes(value.toLowerCase())
				).length === values.length

			if (flag) {
				select.style.background = addedColor
				option.removeAttribute('selected')
				option.setAttribute('selected', 'selected')
				matchFound = true
			}
		}
	}

	if (!matchFound) {
		showNotFoundedValue(node, values)
	}
}

/**
 *Function for editing radio button Taxonomy
 **/
async function editRadioBtn(node, value) {
	let radioButtons = node.querySelectorAll('input')

	for (const btn of radioButtons) {
		btn.removeAttribute('checked')
		let label = btn.parentElement.querySelector('label').innerHTML
		if (label.toLowerCase() === value.toLowerCase()) {
			btn.setAttribute('checked', 'checked')
		}
	}
}

/**
 *Function for editing several selects Taxonomy
 **/
async function editSelectsGroup(node, values, numberOfFields = values.length) {
	let selectContainers = node.querySelectorAll('.shs-field-container')
	let numberOfExtraSelects = numberOfFields - selectContainers.length
	let selectContainer = node.querySelector('.shs-container')

	let valueIndex = 0

	const observerConfig = { childList: true, subtree: true }

	const callback = async function (mutationsList) {
		for (const mutation of mutationsList) {
			const nodeExist = mutation.addedNodes[0]
				? mutation.addedNodes[0].classList.contains('shs-select')
				: false

			if (mutation.type === 'childList' && nodeExist) {
				if (values[valueIndex]) {
					await editSelect(mutation.target, values[valueIndex])
				}
				valueIndex++
			}
		}
	}

	const observer = new MutationObserver(callback)

	if (numberOfExtraSelects > 0) {
		for (let i = 0; i < numberOfExtraSelects; i++) {
			node.querySelector('a').click()
			if (i === numberOfExtraSelects - 1) {
				observer.observe(selectContainer, observerConfig)
			}
		}
	} else {
		for (const [index, container] of selectContainers.entries()) {
			if (values[index]) {
				await editSelect(container, values[index])
			}
		}
	}
}

/**
 *Function for filling checkbox Taxonomy
 **/
async function editCheckbox(node, values, numberOfFields = values.length) {
	let buttons = node.querySelectorAll('input.form-checkbox')
	let numberOfChecked = 0
	let matchFound = false

	for (const button of buttons) {
		button.checked = false
		let label = button.parentElement.querySelector('label').innerText
		if (numberOfChecked < numberOfFields && values.length > 0) {
			for (const value of values) {
				let flag =
					value.filter((val) => label.toLowerCase().includes(val.toLowerCase()))
						.length === value.length

				if (flag) {
					button.checked = true
					numberOfChecked++
					matchFound = true
				}
			}
		}
	}

	if (!matchFound) {
		showNotFoundedValue(node, values)
	}
}

/**
 *  Function for editing SEO fields
 * */

async function editSeoField(node, value) {
	const sectionTitle = node.closest('details').children[0].innerText
	const mainContainer = node.closest('#edit-advanced')

	node.querySelector('label').prepend(`${sectionTitle} : `)

	mainContainer.setAttribute('open', '')

	mainContainer.prepend(node)

	await editInput(node, value)
}

/**
 *Function for checking changes in node
 **/
function checkNodeChanges(node, targetClass = '') {
	return new Promise((resolve) => {
		let observer = new MutationObserver(() => resolve())
		observer.observe(node, {
			childList: true,
			characterDataOldValue: true,
			subtree: true,
		})
	})
}

/**
 *Function for simulating click on node
 **/

function clickElement(node) {
	const evt = document.createEvent('MouseEvents')
	evt.initMouseEvent(
		'mousedown',
		true,
		false,
		window,
		0,
		0,
		0,
		0,
		0,
		false,
		false,
		false,
		false,
		0,
		null
	)
	node.dispatchEvent(evt)
}

/**
 *Function shows not founded value
 **/

function showNotFoundedValue(node, values) {
	const notFoundValueNode = document.createElement('div')
	notFoundValueNode.style.cssText = `background: ${notAddedColor}; padding: 5px; width: fit-content; border-radius: 5px; margin-bottom: 5px;`
	notFoundValueNode.innerHTML = `<b>Copydeck value:</b> ${values.join(' ')}`
	node.prepend(notFoundValueNode)
}

/*
 *Snippet Add Product logic end
 */

/*
 *Snippet Prepare Data start
 */

/*FORMATTERS START*/

/*CUSTOM FIELDS FORMATTERS*/
function internalTitleFormatter() {
	return externalTitleFormatter() && GTINFormatter()
		? `${GTINFormatter()} ${externalTitleFormatter()}`
		: ''
}

function externalTitleFormatter() {
	const copydeckTitle = copydeckData[7]
	const copydeckBrand = copydeckData[30]

	if (copydeckTitle && copydeckBrand) {
		const length = copydeckTitle
			.toLowerCase()
			.split(copydeckBrand.toLowerCase())[1]
			.replace(/[^a-z\s]/gi, '').length
		return length
			? `${copydeckTitle.substring(
					0,
					copydeckBrand.length
			  )}® ${copydeckTitle.substring(
					copydeckTitle.length - length,
					copydeckTitle.length
			  )}`
			: ''
	}
	return ''
}

function bazaavoiceProductIDFormatter() {
	const copydeckId = copydeckData[21]
	return isNaN(parseInt(copydeckId)) ? '' : copydeckId
}

function GTINFormatter() {
	return copydeckData[17] ? copydeckData[17] : ''
}

function buyNowFusepumpFormatter() {
	const copydeckBuyNowFusepump = copydeckData[24]

	if (copydeckBuyNowFusepump.trim()) {
		return copydeckBuyNowFusepump.trim().length > 3
			? copydeckBuyNowFusepump
			: ' '
	}

	return ''
}

function newsletterFormatter() {
	const copydecPetType = copydeckData[31]
	const copydecNewsletter = copydeckData[125]

	return copydecPetType && copydecNewsletter
		? [copydecPetType, copydecNewsletter]
		: []
}

function headLineFormatter() {
	const copydeckBrand = copydeckData[30]
	const copydeckFoodType = copydeckData[36]
	const copydeckPetType = copydeckData[33]

	return copydeckBrand && copydeckBrand && copydeckPetType
		? `${copydeckBrand}® ${copydeckFoodType} für ${copydeckPetType}`
		: ''
}

function highlightsFormatter() {
	const firstHighlightIndex = 65
	const lastHighlightIndex = 92

	let highlights = []

	for (let i = firstHighlightIndex; i <= lastHighlightIndex; i += 3) {
		const highlight = copydeckData[i]
			.split(/([*][A-Za-z])/gm)[0]
			.replace(/["\n]/gm, '')

		highlights.push(
			highlight.split()[highlight.length - 1] !== '.'
				? `${highlight.trim()}.`
				: highlight
		)
	}

	return highlights
}

/**
 * TODO sorting
 */
function productSizeFormatter() {
	const copydeckPackSize = copydeckData[57]
	let packSizes = []

	if (copydeckPackSize) {
		packSizes = copydeckPackSize
			.split(' ')
			.filter((val) => /\d/.test(val))
			.map((val) => {
				if (val.includes('x')) {
					return `${val.replace(/[^x0-9\s]/gi, '')}g`
				} else {
					let parsedVal = parseInt(val.replace(/[^0-9]/gi, ''))
					return parsedVal > 1000 ? `${parsedVal / 1000}kg` : `${parsedVal}g`
				}
			})
			.sort((first, second) => first.length - second.length)
	}

	return packSizes
}

function productOverviewFormatter() {
	const copydeckProdDesc1 = copydeckData[61].trim()
	const copydeckProdDesc2 = copydeckData[62].trim()

	const firstHighlightIndex = 65
	const lastHighlightIndex = 92

	let features = [[], []]
	let descriptions = [[], []]

	for (let i = firstHighlightIndex; i <= lastHighlightIndex; i += 3) {
		separateDescription(copydeckData[i], features)
	}

	function buildDescription(descArr) {
		return descArr[1].length > 0
			? `<p>${descArr[1]
					.join('')
					.split(/[\s][*]/gm)
					.map((desc) => {
						const index = desc.lastIndexOf('*') + 1
						return desc
							.split('')
							.map((e, i) => (i === index ? e.toUpperCase() : e))
							.join('')
					})
					.join('</p><p> *')}</p>`
			: ''
	}

	let firstBlock = `<p><strong>Merkmale</strong></p> <ul><li>${features[0]
		.map((f) => {
			return f.split()[f.length - 1] !== '.' ? `${f.trim()}.` : f
		})
		.join('</li><li>')}</li></ul>${buildDescription(features)}`

	if (copydeckProdDesc1.length > 5) {
		separateDescription(copydeckProdDesc1, descriptions)
	}

	if (copydeckProdDesc2.length > 5) {
		separateDescription(copydeckProdDesc2, descriptions)
	}

	let secondBlock = `<p>${descriptions[0]
		.map((e) => {
			return e.split()[e.length - 1] !== '.' ? `${e.trim()}.` : f
		})
		.join(' ')}</p>${buildDescription(descriptions)}`

	function separateDescription(val, arr) {
		if (val.length > 3) {
			let splittedFeature = val.split(/([*][A-Za-z])/gm)
			arr[0].push(splittedFeature[0].replace(/["\n]/gm, ''))
			arr[1].push(splittedFeature.slice(1).join('').replace(/["\n]/gm, ''))
		}
	}

	return [firstBlock, secondBlock]
}

function ingredientsAndNutritionFormatter() {
	const copydeckIngredients = copydeckData[95].trim()
		? copydeckData[95].replace(/["♥]/gi, '')
		: ''
	const copydeckNutritionAnalyticalConstituents = copydeckData[98].trim()
		? copydeckData[98].replace(/["♥]/gi, '')
		: ''
	const copydeckIngredientsNutritionalAdditives = copydeckData[101].trim()
		? copydeckData[101].replace(/["♥]/gi, '')
		: ''

	return [
		`<p><strong>Zutaten</strong></p><p>${copydeckIngredients}</p>`,
		`<p><strong>Analytische Bestandteile</strong></p><p>${copydeckNutritionAnalyticalConstituents}</p>
		<p><strong>Ernährungsphysiologische Zusatzstoffe</strong></p><p>${copydeckIngredientsNutritionalAdditives}</p>`,
	]
}

function feedingGuideFormatter() {
	const copydeckIngredients = copydeckData[104]

	return [
		`<p><strong>Fütterungs­empfehlung</strong></p><p>${copydeckIngredients.replace(
			/["♥]/gi,
			''
		)}</p>`,
	]
}

/*TAXONOMY FORMATTERS*/
function petTypeFormatter() {
	const copydeckFoodTypeLocal = copydeckData[31]
	return copydeckFoodTypeLocal
}

function brandFormatter() {
	const copydeckBrand = copydeckData[30]
	return [copydeckBrand]
}

function categoriesFormatter() {
	const copydeckPetType = copydeckData[31]
	const copydeckFoodTypeLocal = copydeckData[36]

	return [[copydeckPetType, copydeckFoodTypeLocal]]
}

function lifestagesFormatter() {
	const copydeckPetType = copydeckData[31]
	const copydeckLifestageLocal = copydeckData[127]
		.split(';')
		.map((s) => s.trim())[4]

	return [[copydeckLifestageLocal, copydeckPetType]]
}

function ingredientsFormatter() {
	const ingredients = copydeckData[48].split(',')
	const copydeckPetType = copydeckData[31]

	let data = []

	for (const ingredient of ingredients) {
		if (ingredient.trim().length > 0) {
			data.push([ingredient.trim(), copydeckPetType])
		}
	}

	return data
}

function conditionsFormatter() {
	const conditions = copydeckData[51].trim()
	const copydeckPetType = copydeckData[31]

	return conditions.trim() && copydeckPetType.trim()
		? [[conditions, copydeckPetType]]
		: [['- None -']]
}

function specialNeedsFormatter() {
	const specialNeeds = copydeckData[54].trim()
	const copydeckPetType = copydeckData[31]

	return specialNeeds.trim() && copydeckPetType.trim()
		? [[specialNeeds, copydeckPetType]]
		: [['- None -']]
}

function rangesFormatter() {
	const copydeckRange = copydeckData[39].trim()
	const copydeckBrand = copydeckData[30]

	return copydeckRange.trim() && copydeckBrand.trim()
		? [[copydeckRange, copydeckBrand]]
		: []
}

/*SEO FORMATTERS */

function pageTitleFormatter() {
	const seoTitle = copydeckData[110]
	return seoTitle ? seoTitle : ''
}
function pageDescriptionFormatter() {
	const seoDescription = copydeckData[113]
	return seoDescription ? seoDescription : ''
}
function openGraphTitleFormatter() {
	const seoOGTitle = copydeckData[116]
	return seoOGTitle ? seoOGTitle : ''
}
function openGraphDescriptionFormatter() {
	const seoOGDescription = copydeckData[119]
	return seoOGDescription ? seoOGDescription : ''
}
function urlAliasFormatter() {
	const urlAlias = copydeckData[10]
	return urlAlias ? urlAlias : ''
}

/*FORMATTERS END*/

/*
 *Snippet Prepare Data end
 */
