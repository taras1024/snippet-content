const configJSON = `{
	"customFields":[
	  {"name":"internalTitle","selector":"getElementById('edit-title-wrapper')","editor":"editInput", "languages" : ["fr"]},
	  {"name":"externalTitle","selector":"getElementById('edit-field-product-label-wrapper')","editor":"editInput", "languages" : ["fr","nl"]},
	  {"name":"bazaavoiceProductID","selector":"getElementById('edit-field-product-bv-id-wrapper')","editor":"editInput", "languages" : ["fr"]},
	  {"name":"GTIN","selector":"getElementById('edit-field-dsu-sku-wrapper')","editor":"editInput", "languages" : ["fr"]},
	  {"name":"buyNowFusepump","selector":"getElementById('edit-field-product-fusepump-wrapper')","editor":"editInput", "languages" : ["fr"]},
	  {"name":"newsletter","selector":"getElementById('edit-field-product-newsletter-wrapper')","editor":"editSelect", "languages" : ["fr"]},
	  {"name":"headLine","selector":"getElementById('edit-field-product-headline-wrapper')","editor":"editInput", "languages" : ["fr","nl"]},
	  {"name":"highlights","selector":"getElementById('edit-field-product-highlight-wrapper')","editor":"editInputsGroup","quantity":4, "languages" : ["fr","nl"]},
	  {"name":"productSize","selector":"getElementById('edit-field-product-size-wrapper')","editor":"editInputsGroup", "languages" : ["fr","nl"]},
	  {"name":"productOverview","selector":"getElementById('edit-field-product-overview-wrapper')","editor":"editEditorsGroup", "languages" : ["fr","nl"]},
	  {"name":"ingredientsAndNutrition","selector":"getElementById('edit-field-product-nutrition-wrapper')","editor":"editEditorsGroup", "languages" : ["fr","nl"]},
	  {"name":"feedingGuide","selector":"getElementById('edit-field-product-feeding-guide-wrapper')","editor":"editEditorsGroup", "languages" : ["fr","nl"]},
	  {"name":"petType","selector":"getElementById('edit-field-product-pet-type-wrapper')","editor":"editRadioBtn", "languages" : ["fr"]},
	  {"name":"brand","selector":"getElementById('edit-field-product-brand-wrapper')","editor":"editSelect", "languages" : ["fr"]},
	  {"name":"categories","selector":"getElementById('edit-field-product-category-wrapper')","editor":"editSelectsGroup", "languages" : ["fr"]},
	  {"name":"lifestages","selector":"getElementById('edit-field-product-lifestage-wrapper')","editor":"editSelectsGroup", "languages" : ["fr"]},
	  {"name":"ingredients","selector":"getElementById('edit-field-product-ingredient-wrapper')","editor":"editSelectsGroup", "languages" : ["fr"]},
	  {"name":"conditions","selector":"getElementById('edit-field-product-condition-wrapper')","editor":"editSelectsGroup", "languages" : ["fr"]},
	  {"name":"specialNeeds","selector":"getElementById('edit-field-product-special-need-wrapper')","editor":"editSelectsGroup", "languages" : ["fr"]},
	  {"name":"ranges","selector":"getElementById('edit-field-product-range-wrapper')","editor":"editCheckbox", "languages" : ["fr"]}
	],
	"seoFields":[
	  {"name":"pageTitle","selector":"getElementsByClassName('form-item-field-meta-tags-0-basic-title')[0]","editor":"editSeoField", "languages" : ["fr","nl"]},
	  {"name":"pageDescription","selector":"getElementsByClassName('form-item-field-meta-tags-0-basic-description')[0]","editor":"editSeoField", "languages" : ["fr","nl"]},
	  {"name":"openGraphTitle","selector":"getElementsByClassName('form-item-field-meta-tags-0-open-graph-og-title')[0]","editor":"editSeoField", "languages" : ["fr","nl"]},
	  {"name":"openGraphDescription","selector":"getElementsByClassName('form-item-field-meta-tags-0-open-graph-og-description')[0]","editor":"editSeoField", "languages" : ["fr","nl"]},
	  {"name":"urlAlias","selector":"getElementsByClassName('form-item-path-0-alias')[0]","editor":"editSeoField", "languages" : ["fr","nl"]}
	],
	"copydeck":{
	  "translations":{
		  "features":{"fr":"Caractéristiques", "nl":"Kenmerken"},
		  "ingredients":{"fr":"Ingrédients", "nl":"Ingrediënten"},
		  "analyticalConstituents":{"fr":"Nutrition et constituants analytiques", "nl":"Voeding en analytische stoffen"},
		  "nutritionalAdditives":{"fr":"Additifs nutritionnels", "nl":"Voedingsadditieven"},
		  "feedingGuide":{"fr":"Guide d'alimentation", "nl":"Voedingsadvies"}
		}
	}
 }`

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
	'https://live-74999-petcare-purinattt-belgium.pantheonsite.io/fr/node/5016/edit'
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

const config = JSON.parse(configJSON)

let language = ''

function changePage() {
	const url = snippetPageView.contentWindow.location.href
	const urlLanguage = url.split('//')[1].split('/')[1]
	snippetUrl.value = url
	language = urlLanguage.length === 2 ? urlLanguage : ''
	initCustomFieldsFlag = false
	initSeoFieldsFlag = false
}

function checkLanguage(languages) {
	return languages.filter((e) => e === language).length
}

snippetPageView.addEventListener('load', () => {
	changePage()
})

snippetPageView.addEventListener('click', () => {
	changePage()
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
	for await (const column of snippetInput.value.split('\t\n')) {
		copydeckAllData.push(column.split('\t'))
	}
	copydeckData = copydeckAllData[0]
	console.log(copydeckData)
}

async function initFields(fields, flag) {
	if (!flag) {
		for (const field of fields) {
			if (checkLanguage(field.languages)) {
				await eval(
					`${field.name}Node = snippetPageView.contentWindow.document.${field.selector}`
				)
			}
		}
	}
}

async function editFields(fields) {
	for (const field of fields) {
		snippetLoaderMessage.innerHTML = `Editing ${field.name.replace(
			/[A-Z]/gm,
			(letter) => ` ${letter.toLowerCase()}`
		)} block ...`

		if (checkLanguage(field.languages)) {
			await eval(
				`${field.editor}(${field.name}Node,${field.name}Formatter()${
					field.quantity ? ',' + field.quantity : ''
				})`
			)
		}
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
	const btnNode = node.querySelector('input.paragraphs-icon-button')

	let flag = btnNode.value === 'Edit'

	if (flag) {
		clickElement(btnNode)
		await checkNodeChanges(node)
	} else {
		node
			.querySelector('iframe')
			.contentWindow.document.querySelector('body').innerHTML = values[0]
	}

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
	} else if (flag) {
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
		let blockList = flag
			? node.querySelectorAll('.ajax-new-content .draggable')
			: node.querySelectorAll('.draggable')

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
				highlightInputs[index].focus()
				highlightInputs[index].blur()
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

	nodeInput.value = flag ? value : ''
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
	let matchFound = false

	for (const btn of radioButtons) {
		btn.removeAttribute('checked')
		let label = btn.parentElement.querySelector('label').innerHTML
		if (label.toLowerCase() === value.toLowerCase()) {
			btn.setAttribute('checked', 'checked')
			matchFound = true
		}
	}

	if (!matchFound) {
		showNotFoundedValue(node, [value])
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
			} else {
				await editSelect(container, ['- None -'])
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
	const copydeckTitle = copydeckData[5].trim()
	const copydeckBrand = copydeckData[14].trim()

	return copydeckTitle ? copydeckTitle : ''
}

function bazaavoiceProductIDFormatter() {
	const copydeckId = copydeckData[10].replace(/[^0-9]/gm, '').trim()
	return copydeckId.length > 0 && copydeckId !== '0' ? copydeckId : ''
}

function GTINFormatter() {
	const copydeckGTIN = copydeckData[9]
		.split(' ')[0]
		.replace(/[^0-9]/gm, '')
		.trim()
	return copydeckGTIN.length > 0 && copydeckGTIN !== '0' ? copydeckGTIN : ''
}

function buyNowFusepumpFormatter() {
	const copydeckBuyNowFusepump = copydeckData[11].replace(/[^0-9]/gm, '').trim()
	return copydeckBuyNowFusepump.length > 0 && copydeckBuyNowFusepump !== '0'
		? copydeckBuyNowFusepump
		: ''
}

function newsletterFormatter() {
	const copydecPetType = copydeckData[16]
	const copydecNewsletter = copydeckData[75]

	return copydecPetType && copydecNewsletter
		? [copydecPetType, copydecNewsletter]
		: []
}

function headLineFormatter() {
	const prodCategoryLocal = copydeckData[22]

	return prodCategoryLocal ? prodCategoryLocal : ''
}

function highlightsFormatter() {
	const firstHighlightIndex = 36
	const lastHighlightIndex = 54

	let highlights = []

	for (let i = firstHighlightIndex; i <= lastHighlightIndex; i += 2) {
		const highlight = copydeckData[i]
			.split(/([*][A-Za-z])/gm)[0]
			.replace(/["\n]/gm, '')
			.trim()

		let lastSymbol = highlight.split('')[highlight.length - 1]
		highlights.push(
			lastSymbol !== '.' && lastSymbol !== '!' && lastSymbol !== '?'
				? `${highlight}.`
				: highlight
		)
	}

	return highlights
}

/**
 * TODO sorting
 */
function productSizeFormatter() {
	const copydeckPackSize = copydeckData[32]
	let packSizes = []

	if (copydeckPackSize) {
		packSizes = copydeckPackSize
			.split(' ')
			.filter((val) => /\d/.test(val))
			.map((val) => {
				if (val.includes('x')) {
					return `${val.replace(/[^x0-9\s]/gi, '')}g`
				} else if (val.includes('kg')) {
					let parsedVal = val.replace(/[^0-9\.]/gi, '')
					return `${parsedVal}kg`
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
	const copydeckProdDesc1 = copydeckData[34].trim()

	const firstHighlightIndex = 36
	const lastHighlightIndex = 54

	let features = [[], []]
	let descriptions = [[], []]

	for (let i = firstHighlightIndex; i <= lastHighlightIndex; i += 2) {
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

	let firstBlock = `<p><strong>${
		config.copydeck.translations.features[language]
	}</strong></p> <ul><li>${features[0]
		.map((e) => {
			let element = e.trim()
			let lastSymbol = element.split('')[element.length - 1]
			return lastSymbol !== '.' && lastSymbol !== '!' && lastSymbol !== '?'
				? `${element}.`
				: element
		})
		.join('</li><li>')}</li></ul>${buildDescription(features)}`

	if (copydeckProdDesc1.length > 5) {
		separateDescription(copydeckProdDesc1, descriptions)
	}

	let secondBlock = `<p>${descriptions[0]
		.map((e) => {
			let element = e.trim()
			let lastSymbol = element.split('')[element.length - 1]
			return lastSymbol !== '.' && lastSymbol !== '!' && lastSymbol !== '?'
				? `${element.trim()}.`
				: element
		})
		.join(' ')}</p>${buildDescription(descriptions)}`

	function separateDescription(val, arr) {
		if (val.length > 3) {
			let splittedFeature = val.split(/([*][A-Za-z])/gm)
			arr[0].push(splittedFeature[0].replace(/["\n]/gm, '').trim())
			arr[1].push(splittedFeature.slice(1).join('').replace(/["\n]/gm, ''))
		}
	}

	return [firstBlock, secondBlock]
}

function ingredientsAndNutritionFormatter() {
	const copydeckIngredients = copydeckData[56].trim()
		? copydeckData[56].replace(/["♥]/gi, '')
		: ''
	const copydeckNutritionAnalyticalConstituents = copydeckData[58].trim()
		? copydeckData[58].replace(/["♥]/gi, '')
		: ''
	const copydeckIngredientsNutritionalAdditives = copydeckData[60].trim()
		? copydeckData[60].replace(/["♥]/gi, '')
		: ''

	return [
		`<p><strong>${config.copydeck.translations.ingredients[language]}</strong></p><p>${copydeckIngredients}</p>`,
		`<p><strong>${config.copydeck.translations.analyticalConstituents[language]}</strong></p><p>${copydeckNutritionAnalyticalConstituents}</p>
		 <p><strong>${config.copydeck.translations.nutritionalAdditives[language]}</strong></p><p>${copydeckIngredientsNutritionalAdditives}</p>`,
	]
}

function feedingGuideFormatter() {
	const copydeckIngredients = copydeckData[62]

	return [
		`<p><strong>${
			config.copydeck.translations.feedingGuide[language]
		}</strong></p><p>${copydeckIngredients
			.replace(/["♥]/gi, '')
			.replace(/<\/?[^>]+(>|$)/g, '')}</p>`,
	]
}

/*TAXONOMY FORMATTERS*/
function petTypeFormatter() {
	const copydeckPetType = copydeckData[16]
	return copydeckPetType
}

function brandFormatter() {
	const copydeckBrand = copydeckData[14]
	return [copydeckBrand]
}

function categoriesFormatter() {
	const copydeckPetType = copydeckData[16]
	const copydeckFoodTypeLocal = copydeckData[21]

	return [[copydeckPetType, copydeckFoodTypeLocal]]
}

function lifestagesFormatter() {
	const copydeckPetType = copydeckData[16]
	const copydeckLifestageLocal = copydeckData[24]

	return [[copydeckLifestageLocal, copydeckPetType]]
}

function ingredientsFormatter() {
	const ingredients = copydeckData[26].split(',')
	const copydeckPetType = copydeckData[16]

	let data = []

	for (const ingredient of ingredients) {
		if (ingredient.trim().length > 0) {
			data.push([ingredient.trim(), copydeckPetType])
		}
	}

	return data
}

function conditionsFormatter() {
	const conditions = copydeckData[28].trim()
	const copydeckPetType = copydeckData[16]

	return conditions.trim().length > 5 && copydeckPetType.trim()
		? [[conditions, copydeckPetType]]
		: [['- None -']]
}

function specialNeedsFormatter() {
	const specialNeeds = copydeckData[30].trim()
	const copydeckPetType = copydeckData[16]

	return specialNeeds.trim().length > 5 && copydeckPetType.trim()
		? [[specialNeeds, copydeckPetType]]
		: [['- None -']]
}

function rangesFormatter() {
	const copydeckRange = copydeckData[20].trim()
	const copydeckBrand = copydeckData[14]

	return copydeckRange.trim() && copydeckBrand.trim()
		? [[copydeckRange, copydeckBrand]]
		: []
}

/*SEO FORMATTERS */

function pageTitleFormatter() {
	const seoTitle = copydeckData[66]
	return seoTitle ? seoTitle : ''
}
function pageDescriptionFormatter() {
	const seoDescription = copydeckData[68]
	return seoDescription ? seoDescription : ''
}
function openGraphTitleFormatter() {
	const seoOGTitle = copydeckData[70]
	return seoOGTitle ? seoOGTitle : ''
}
function openGraphDescriptionFormatter() {
	const seoOGDescription = copydeckData[72]
	return seoOGDescription ? seoOGDescription : ''
}
function urlAliasFormatter() {
	const urlAlias = copydeckData[7]
	return urlAlias ? urlAlias : ''
}

/*FORMATTERS END*/

/*
 *Snippet Prepare Data end
 */
