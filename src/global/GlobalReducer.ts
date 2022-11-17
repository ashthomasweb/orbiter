/******************************************************************************
* FILENAME:
*   MainReducer.ts

* DESCRIPTION:
*   Primary reducer for React useContext Hook pattern.

* NOTES:
*   - Needs to be parsed into task-specific context's

* (c) Copyright Kloudlog LLC
* Usage Rights: Not for public use or redistribution.

******************************************************************************/


// import {
//   /* Assets */
//   /* Database */
//   /* Helper Functions */
//   indexFinder,
//   calcLineHalfPoint,
//   updateModeCheck,
//   /* Components */
//   /* Icons */
// } from '../../export-hub'

export const GlobalReducer = (state: any, action: any) => {
  /* Helper functions to setup, package, and return the notes array */



  // function noteSetup() {
  //   let note = state.displayedItems.find(
  //     (item: any) => item.id === Number(action.payload.id)
  //   )
  //   let displayedItems = [...state.displayedItems]
  //   return [note, displayedItems]
  // }

  // function connSetup() {
  //   let connector = state.connectorArray.find(
  //     (item: any) => item.id === Number(action.payload.id)
  //   )
  //   let connectorArray = [...state.connectorArray]
  //   return [connector, connectorArray]
  // }

  // function setNoteAndReturnState(displayedItems: any[], id: number, note: any) {
  //   displayedItems[indexFinder(displayedItems, id)] = note
  //   return {
  //     ...state,
  //     displayedItems: displayedItems,
  //   }
  // }

  switch (action.type) {
  //   /* BROWSER CHECK */

  //   /* AUTHORIZATION FUNCTIONS */

  //   case 'SET_CURRENT_USER_TO_STATE': {
  //     // console.log(`Trace: SET_CURRENT_USER_TO_STATE()`)
  //     let data = action.payload.userObj
  //     let userObj = data
  //     return {
  //       ...state,
  //       userObj: userObj,
  //     }
  //   }

  //   case 'SIGN_USER_OUT': {
  //     // console.log(`Trace: SIGN_USER_OUT()`)
  //     let userObj = null
  //     return {
  //       ...state,
  //       userObj: userObj,
  //     }
  //   }

  // //   /* USER DATA */

  // //   case 'SET_USERBOARDS': {
  // //     // console.log(`Trace: SET_USERBOARDS()`)
  // //     let data = action.payload.userBoards
  // //     let userBoards = data
  // //     return {
  // //       ...state,
  // //       userBoards: userBoards,
  // //     }
  // //   }

  // //   /* DISPLAY PANE */

  //   case 'ADMIN_PAGE_ON': {
  //     // console.log(`Trace: ADMIN_PAGE_ON()`)
  //     let globalDisplay = {
  //       ...state.globalDisplay,
  //       isBoardPage: false,
  //       isWelcomePage: false,
  //       isAdminPage: true,
  //     }
  //     return {
  //       ...state,
  //       globalDisplay: globalDisplay,
  //     }
  //   }

  //   case 'WELCOME_PAGE_ON': {
  //     // console.log(`Trace: WELCOME_PAGE_ON()`)
  //     let globalDisplay = {
  //       ...state.globalDisplay,
  //       isBoardPage: false,
  //       isWelcomePage: true,
  //       isAdminPage: false,
  //     }
  //     return {
  //       ...state,
  //       globalDisplay: globalDisplay,
  //     }
  //   }

  //   case 'BOARD_PAGE_ON': {
  //     // console.log(`Trace: BOARD_PAGE_ON()`)
  //     let globalDisplay = {
  //       ...state.globalDisplay,
  //       isBoardPage: true,
  //       isWelcomePage: false,
  //       isAdminPage: false,
  //     }
  //     return {
  //       ...state,
  //       globalDisplay: globalDisplay,
  //     }
  //   }

  //   /* HEADER */

  //   case 'TOG_USER_DROP_DOWN': {
  //     // console.log(`Trace: TOG_USER_DROP_DOWN()`)
  //     let display = {
  //       ...state.display,
  //       isUserDropDown: !state.display.isUserDropDown,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_NOTIF_DROP_DOWN': {
  //     // console.log(`Trace: TOG_NOTIF_DROP_DOWN()`)
  //     let display = {
  //       ...state.display,
  //       isNotifDropDown: !state.display.isNotifDropDown,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_SEARCH_RESULTS': {
  //     // console.log(`Trace: SET_SEARCH_RESULTS()`)
  //     let data = action.payload.results
  //     let display = {
  //       ...state.display,
  //       searchResults: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_IS_SEARCH_FILTERED': {
  //     // console.log(`Trace: TOG_IS_SEARCH_FILTERED()`)
  //     let data = action.payload.isFiltered
  //     let display = {
  //       ...state.display,
  //       isSearchFiltered: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_INTERFACE_ZOOM': {
  //     // console.log(`Trace: SET_INTERFACE_ZOOM()`)
  //     let data = action.payload.uiZoom
  //     let display = { ...state.display, uiZoom: data }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   /* ADMIN PAGE */

  //   case 'TOG_BOARD_CLICK_MENU': {
  //     // console.log(`Trace TOG_BOARD_CLICK_MENU()`)
  //     let data = action.payload
  //     let boardClickMenu = {
  //       displayed: data.displayed,
  //       boardId: data.boardId,
  //       offset: data?.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       boardClickMenu: boardClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_CURRENT_BOARD_MENU': {
  //     // console.log(`Trace: SET_CURRENT_BOARD_MENU()`)
  //     let data = action.payload.currentMenuTitle
  //     let display = {
  //       ...state.display,
  //       currentBoardMenu: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'RENAME_SLIDE_OUT': {
  //     // console.log(`Trace: RENAME_SLIDE_OUT()`)
  //     let display = {
  //       ...state.display,
  //       isRenameSlide: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'RENAME_SLIDE_IN': {
  //     // console.log(`Trace: RENAME_SLIDE_IN()`)
  //     let display = {
  //       ...state.display,
  //       isRenameSlide: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   /* BOARD PAGE */

  //   /* SET BOARD ITEMS */

  //   case 'SET_DISPLAYED_ITEMS': {
  //     // console.log(`Trace: SET_DISPLAYED_ITEMS()`)
  //     let data = [...action.payload.displayedItems]
  //     let displayedItems = data
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_ALL_CONNECTORS': {
  //     // console.log(`Trace: SET_ALL_CONNECTORS()`)
  //     let data = [...action.payload.connectorArray]
  //     let connectorArray = data
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   case 'SET_DISPLAY': {
  //     // console.log(`Trace: SET_DISPLAY()`)
  //     let data = action.payload.display
  //     return {
  //       ...state,
  //       display: data,
  //     }
  //   }

  //   case 'SET_UIZOOM_FOR_DEVICE': {
  //     // console.log(`Trace: SET_UIZOOM_FOR_DEVICE()`)
  //     let data = action.payload.uiZoomForDevice
  //     let display = {
  //       ...state.display,
  //       uiZoomForDevice: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_UIZOOM': {
  //     // console.log(`Trace: SET_UIZOOM()`)
  //     let data = action.payload.uiZoom
  //     let display = {
  //       ...state.display,
  //       uiZoom: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_CURRENT_BOARDOBJ': {
  //     // console.log(`Trace: SET_CURRENT_BOARDOBJ()`)
  //     let data = action.payload.boardObj
  //     return {
  //       ...state,
  //       boardObj: data,
  //     }
  //   }

  //   case 'BOARD_NAME_CHANGE': {
  //     // console.log(`Trace: BOARD_NAME_CHANGE()`)
  //     let data = action.payload.name
  //     let boardObj = {
  //       ...state.boardObj,
  //       name: data,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   /* DRAG HANDLING */

  //   case 'SET_DRAG_MOUSE_OFFSET': {
  //     // console.log(`Trace: SET_DRAG_MOUSE_OFFSET()`)
  //     let data = action.payload.mouseOffset
  //     let mouseOffset = { ...data }
  //     return {
  //       ...state,
  //       mouseOffset: mouseOffset,
  //     }
  //   }

  //   case 'SET_DRAGGED_ID': {
  //     // console.log(`Trace: SET_DRAGGED_ID()`)
  //     let data = action.payload.draggedId
  //     let display = {
  //       ...state.display,
  //       draggedId: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ONDRAG_ITEM_DATA': {
  //     // console.log(`Trace: ONDRAG_ITEM_DATA()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload.itemData
  //     note = {
  //       ...note,
  //       left: data.left,
  //       top: data.top,
  //       isNew: false,
  //     }
  //     data.zIndex && (note.zIndex = data.zIndex)
  //     displayedItems[indexFinder(displayedItems, action.payload.id)] = note
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_HIGH_ZINDEX': {
  //     // console.log(`Trace: SET_HIGH_ZINDEX()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload.itemData
  //     note = {
  //       ...note,
  //       zIndex: data.zIndex,
  //     }
  //     displayedItems[indexFinder(displayedItems, action.payload.id)] = note
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'TRASH_ON': {
  //     // console.log(`Trace: TRASH_ON()`)
  //     let display = {
  //       ...state.display,
  //       trashable: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TRASH_OFF': {
  //     // console.log(`Trace: TRASH_OFF()`)
  //     let display = {
  //       ...state.display,
  //       trashable: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_CONSOLE': {
  //     // console.log(`Trace: TOG_CONSOLE()`)
  //     let data = action.payload.isConsoleOpen
  //     let display = { ...state.display, isConsoleOpen: !data }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_PROVPANE': {
  //     // console.log(`Trace: TOG_PROVPANE()`)
  //     let data = action.payload.isProvPaneOpen
  //     let display = { ...state.display, isProvPaneOpen: !data }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   /* UPDATE MODE FOR NON-CONNECTORS */

  //   case 'TOG_UPDATE_MODE': {
  //     // console.log(`Trace: TOG_UPDATE_MODE()`)
  //     let [note, displayedItems] = noteSetup()
  //     let updateActive
  //     note = {
  //       ...note,
  //       isUpdate: !note.isUpdate,
  //     }
  //     displayedItems[indexFinder(displayedItems, note.id)] = note
  //     updateActive = updateModeCheck(displayedItems)
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //       updateActive: updateActive,
  //     }
  //   }

  //   case 'DISABLE_UPDATE_MODE': {
  //     // console.log(`Trace: DISABLE_UPDATE_MODE()`)
  //     let updateActive = false
  //     let displayedItems = [...state.displayedItems]
  //     let connectorArray = [...state.connectorArray]
  //     displayedItems.forEach((note) => (note.isUpdate = false))
  //     connectorArray.forEach((conn) => (conn.isUpdate = false))
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //       connectorArray: connectorArray,
  //       updateActive: updateActive,
  //     }
  //   }

  //   /* TOOLBAR ACTIONS AND HANDLING */

  //   case 'DRAG_ITEM_FROM_TB': {
  //     // console.log(`Trace: DRAG_ITEM_FROM_TB()`)
  //     let data = action.payload.posData
  //     let displayedItems = [...state.displayedItems]
  //     displayedItems[displayedItems.length - 1] = {
  //       ...displayedItems[displayedItems.length - 1],
  //       left: `${data.left - 40}px`,
  //       top: `${data.top - 40}px`,
  //       zIndex: 2147483646,
  //     }
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'DRAG_CONN_FROM_TB': {
  //     // console.log(`Trace: DRAG_CONN_FROM_TB()`)
  //     let data = action.payload.posData
  //     let connectorArray = [...state.connectorArray]
  //     connectorArray[connectorArray.length - 1] = {
  //       ...connectorArray[connectorArray.length - 1],
  //       isRayMode: true,
  //       handleType: 'arrow',
  //       cDrag: false,
  //       originPos: {
  //         x: data.left + 15 - 130,
  //         y: data.top + 15,
  //       },
  //       centerJoint: {
  //         x: data.left + 15,
  //         y: data.top + 15,
  //       },
  //       endPos: {
  //         x: data.left + 15 + 130,
  //         y: data.top + 15,
  //       },
  //     }
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   /* TEXT COMPONENT CONTENT UPDATES */

  //   case 'ONCHANGE_ITEM_TEXT': {
  //     // console.log(`Trace: ONCHANGE_ITEM_TEXT()`)
  //     let data = action.payload.itemText
  //     let [item, displayedItems] = noteSetup()
  //     item.itemText = data
  //     return setNoteAndReturnState(displayedItems, item.id, item)
  //   }

  //   case 'ONRESIZE_ITEM': {
  //     // console.log(`Trace: ONRESIZE_ITEM()`)
  //     let data = action.payload.dimensions
  //     let [note, displayedItems] = noteSetup()
  //     note = {
  //       ...note,
  //       width: data.width,
  //       height: data.height,
  //     }
  //     return setNoteAndReturnState(displayedItems, note.id, note)
  //   }

  //   /* TEXT COMPONENT TRAY */

  //   // the following boolean-based toggles do NOT work when value is
  //   // pulled from note object here, needs to be passed in payload
  //   case 'TOG_NOTE_CHECKED': {
  //     // console.log(`Trace: TOG_NOTE_CHECKED()`)
  //     let data = action.payload.isChecked
  //     let [note, displayedItems] = noteSetup()
  //     note.isChecked = !data
  //     return setNoteAndReturnState(displayedItems, note.id, note)
  //   }

  //   case 'TOG_TRAY': {
  //     // console.log(`Trace: TOG_TRAY()`)
  //     let data = action.payload.isTrayDisplay
  //     let [note, displayedItems] = noteSetup()
  //     note.isTrayDisplay = !data
  //     return setNoteAndReturnState(displayedItems, note.id, note)
  //   }

  //   // somewhere, this logic is failing to save with the board
  //   // may not be in this function
  //   case 'ONRESIZE_TRAY': {
  //     // console.log(`Trace: ONRESIZE_TRAY()`)
  //     let data = action.payload.dimensions
  //     let [note, displayedItems] = noteSetup()
  //     note = {
  //       ...note,
  //       trayWidth: data.width,
  //       trayHeight: data.height,
  //     }
  //     return setNoteAndReturnState(displayedItems, note.id, note)
  //   }

  //   case 'ONCHANGE_TRAY_TEXT': {
  //     // console.log(`Trace: ONCHANGE_TRAY_TEXT()`)
  //     let data = action.payload.trayText
  //     let [note, displayedItems] = noteSetup()
  //     note = { ...note, trayText: data }
  //     return setNoteAndReturnState(displayedItems, note.id, note)
  //   }

  //   /* MULTISELECT */

  //   case 'TOG_MULTISELECT': {
  //     // console.log(`Trace: TOG_MULTISELECT()`)
  //     let data = action.payload
  //     if (data.isConnector) {
  //       let connectorArray = [...state.connectorArray]
  //       let connector = connectorArray[indexFinder(connectorArray, data.id)]
  //       connector.isMultiSelected = !data.isMultiSelected
  //       return {
  //         ...state,
  //         connectorArray: connectorArray,
  //       }
  //     } else {
  //       let [note, displayedItems] = noteSetup()
  //       note = { ...note, isMultiSelected: !data.isMultiSelected }
  //       return setNoteAndReturnState(displayedItems, note.id, note)
  //     }
  //   }

  //   /* CONNECTOR */

  //   // TWO-CLICK MODE & LOGIC

  //   case 'TOG_CONNECTOR_TWO_CLICK': {
  //     // console.log(`Trace: TOG_CONNECTOR_TWO_CLICK()`)
  //     let drawModeActive = !state.drawModeActive
  //     return {
  //       ...state,
  //       drawModeActive: drawModeActive,
  //     }
  //   }

  //   case 'TURN_OFF_TWO_CLICKED_STATUS': {
  //     // console.log(`Trace: TURN_OFF_TWO_CLICKED_STATUS()`)
  //     let [note, displayedItems] = noteSetup()
  //     note.isTwoClicked = false
  //     let tempConn = {
  //       ...state.newConnector,
  //     }
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //       tempConn: tempConn,
  //     }
  //   }

  //   case 'SET_CONNECTOR_ORIGIN': {
  //     // console.log(`Trace: SET_CONNECTOR_ORIGIN()`)
  //     var data = action.payload.connectorData
  //     let [note, displayedItems] = noteSetup()
  //     let attachmentsGroup = [...note.attachmentsGroup, data.arrowId]
  //     note = {
  //       ...note,
  //       attachmentsGroup: attachmentsGroup,
  //       isTwoClicked: true,
  //     }
  //     displayedItems[indexFinder(displayedItems, note.id)] = note
  //     var tempConn = { ...data.tempConn }
  //     return {
  //       ...state,
  //       tempConn: tempConn,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_CONNECTOR_END': {
  //     // console.log(`Trace: SET_CONNECTOR_END()`)
  //     let data = action.payload.connectorData
  //     let [note, displayedItems] = noteSetup()
  //     let attachmentsGroup = [...note.attachmentsGroup, data.arrowId]
  //     note = {
  //       ...note,
  //       attachmentsGroup: attachmentsGroup,
  //     }
  //     displayedItems[indexFinder(displayedItems, note.id)] = note
  //     let tempConn = {
  //       ...state.newConnector,
  //     }
  //     return {
  //       ...state,
  //       tempConn: tempConn,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'RECONNECT_DROP': {
  //     // console.log(`Trace: RECONNECT_DROP()`)
  //     let data = action.payload
  //     let displayedItems = [...state.displayedItems]
  //     let connectorArray = [...state.connectorArray]
  //     displayedItems[indexFinder(displayedItems, data.originNoteId)] =
  //       data.newItem
  //     connectorArray[indexFinder(connectorArray, data.newConnector.id)] =
  //       data.newConnector

  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'TOG_CONNECTOR_DRAGGING': {
  //     // console.log(`Trace: TOG_CONNECTOR_DRAGGING()`)
  //     let data = action.payload
  //     let display = {
  //       ...state.display,
  //       isPreventMulti: data.isPreventMulti,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   // UPDATE MODE - MENU IS ACTIVE

  //   case 'TOG_CONN_UPDATE_MODE': {
  //     // console.log(`Trace: TOG_CONN_UPDATE_MODE()`)
  //     let [connector, connectorArray] = connSetup()
  //     let updateActive
  //     connector = {
  //       ...connector,
  //       isUpdate: !connector.isUpdate,
  //     }
  //     connectorArray[indexFinder(connectorArray, connector.id)] = connector
  //     updateActive = updateModeCheck(connectorArray)
  //     return {
  //       ...state,
  //       connectorArray,
  //       updateActive,
  //     }
  //   }

  //   /* MENU */

  //   case 'CONNECTOR_MENU_DATA': {
  //     // console.log(`Trace: CONNECTOR_MENU_DATA()`)
  //     let data = action.payload
  //     let connectorClickMenu = {
  //       ...state.display.connectorClickMenu,
  //       connId: data.connId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       connectorClickMenu: connectorClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'CONNECTOR_MENU_OFF': {
  //     // console.log(`Trace: CONNECTOR_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isConnectorMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'CONNECTOR_MENU_ON': {
  //     // console.log(`Trace: CONNECTOR_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isConnectorMenu: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   // turns off update mode on previous connector when opening
  //   // menu on a second connector
  //   case 'DISABLE_ALL_CONNECTORS': {
  //     // console.log(`Trace: DISABLE_ALL_CONNECTORS()`)
  //     let updateActive = false
  //     let connectorArray = [...state.connectorArray]
  //     connectorArray.forEach((conn) => (conn.isUpdate = false))
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //       updateActive: updateActive,
  //     }
  //   }

  //   /* ARROW DIRECTION */

  //   case 'SET_HANDLE_DISPLAY_CODE': {
  //     // console.log(`Trace: SET_HANDLE_DISPLAY_CODE()`)
  //     let data = action.payload
  //     let connectorArray = [...state.connectorArray]
  //     let connector = connectorArray[indexFinder(connectorArray, data.connId)]
  //     connector.handleDisplayCode = data.handleDisplayCode
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   case 'SET_HANDLE_TYPE': {
  //     // console.log(`Trace: SET_HANDLE_TYPE()`)
  //     let data = action.payload
  //     let connectorArray = [...state.connectorArray]
  //     let connector = connectorArray[indexFinder(connectorArray, data.connId)]
  //     connector.handleType = data.handleType
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   case 'SET_LINE_STYLE': {
  //     // console.log(`Trace: SET_LINE_STYLE()`)
  //     let data = action.payload
  //     let connectorArray = [...state.connectorArray]
  //     let connector = connectorArray[indexFinder(connectorArray, data.connId)]
  //     connector.lineWeight = data.lineWeight
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   /* RAY MODE */

  //   case 'RAY_MODE_TOG': {
  //     // console.log(`Trace: RAY_MODE_TOG()`)
  //     let data = action.payload
  //     let connectorArray = [...state.connectorArray]
  //     let connector = connectorArray[indexFinder(connectorArray, data.connId)]

  //     // if turning ray mode ON
  //     // set center handle to NOT be draggable
  //     if (!connector.isRayMode) {
  //       // sets center handle initially, upon triggering 'Ray Mode'
  //       let centerPoint = calcLineHalfPoint(
  //         connector.originPos,
  //         connector.endPos
  //       )
  //       connector.centerJoint = {
  //         ...connector.centerJoint,
  //         x: centerPoint.x,
  //         y: centerPoint.y,
  //       }
  //       connector.cDrag = true
  //     } else {
  //       connector.cDrag = false
  //     }
  //     connector.isRayMode = !data.isRayMode

  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   /* POSITIONING */

  //   // HANDLE PLACEMENT

  //   case 'HANDLE_DRAGGABLE_ON': {
  //     // console.log(`Trace: HANDLE_DRAGGABLE_ON()`)
  //     let data = action.payload.handleDrag
  //     let target = action.payload.handle
  //     let connId = action.payload.connId
  //     let connectorArray = [...state.connectorArray]
  //     let connector = connectorArray[indexFinder(connectorArray, connId)]

  //     if (target === '1') {
  //       connector.oDrag = data
  //     } else if (target === '2') {
  //       connector.eDrag = data
  //     } else if (target === 'center') {
  //       connector.cDrag = data
  //     }

  //     connectorArray[indexFinder(connectorArray, connId)] = connector
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   /* ITEM MENUS */

  //   case 'TEXTBOX_MENU_DATA': {
  //     // console.log(`Trace: TEXTBOX_MENU_DATA()`)
  //     let data = action.payload
  //     let textboxClickMenu = {
  //       ...state.display.textboxClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       textboxClickMenu: textboxClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TEXTBOX_MENU_OFF': {
  //     // console.log(`Trace: TEXTBOX_MENU_OFF()`)
  //     let display = {
  //       isTextboxMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TEXTBOX_MENU_ON': {
  //     // console.log(`Trace: TEXTBOX_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isTextboxMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'STICKY_NOTE_MENU_DATA': {
  //     // console.log(`Trace: STICKY_NOTE_MENU_DATA()`)
  //     let data = action.payload
  //     let stickyNoteClickMenu = {
  //       ...state.display.stickyNoteClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       stickyNoteClickMenu: stickyNoteClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'STICKY_NOTE_MENU_OFF': {
  //     // console.log(`Trace: STICKY_NOTE_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isStickyNoteMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'STICKY_NOTE_MENU_ON': {
  //     // console.log(`Trace: STICKY_NOTE_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isStickyNoteMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'MAT_MENU_DATA': {
  //     // console.log(`Trace: MAT_MENU_DATA()`)
  //     let data = action.payload
  //     let matClickMenu = {
  //       ...state.display.matClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       matClickMenu: matClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'MAT_MENU_OFF': {
  //     // console.log(`Trace: MAT_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isMatMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'MAT_MENU_ON': {
  //     // console.log(`Trace: MAT_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isMatMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'PROJECT_MENU_DATA': {
  //     // console.log(`Trace: PROJECT_MENU_DATA()`)
  //     let data = action.payload
  //     let projectClickMenu = {
  //       ...state.display.projectClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       projectClickMenu: projectClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'PROJECT_MENU_OFF': {
  //     // console.log(`Trace: PROJECT_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isGCPProjectMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'PROJECT_MENU_ON': {
  //     // console.log(`Trace: PROJECT_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isGCPProjectMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'VPC_MENU_DATA': {
  //     // console.log(`Trace: VPC_MENU_DATA()`)
  //     let data = action.payload
  //     let vpcClickMenu = {
  //       ...state.display.vpcClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       vpcClickMenu: vpcClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'VPC_MENU_OFF': {
  //     // console.log(`Trace: VPC_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isGCPVPCMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'VPC_MENU_ON': {
  //     // console.log(`Trace: VPC_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isGCPVPCMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SUBNET_MENU_DATA': {
  //     // console.log(`Trace: SUBNET_MENU_DATA()`)
  //     let data = action.payload
  //     let subnetClickMenu = {
  //       ...state.display.subnetClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       subnetClickMenu: subnetClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SUBNET_MENU_OFF': {
  //     // console.log(`Trace: SUBNET_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isGCPSubnetMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SUBNET_MENU_ON': {
  //     // console.log(`Trace: SUBNET_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isGCPSubnetMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'COMMENT_MENU_DATA': {
  //     // console.log(`Trace: COMMENT_MENU_DATA()`)
  //     let data = action.payload
  //     let commentClickMenu = {
  //       ...state.display.commentClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       commentClickMenu: commentClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'COMMENT_MENU_ON': {
  //     // console.log(`Trace: COMMENT_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isCommentMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'COMMENT_MENU_OFF': {
  //     // console.log(`Trace: COMMENT_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isCommentMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SERVICE_MENU_DATA': {
  //     // console.log(`Trace: SERVICE_MENU_DATA()`)
  //     let data = action.payload
  //     let serviceClickMenu = {
  //       ...state.display.serviceClickMenu,
  //       itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       serviceClickMenu: serviceClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SERVICE_MENU_ON': {
  //     // console.log(`Trace: SERVICE_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isServiceMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SERVICE_MENU_OFF': {
  //     // console.log(`Trace: SERVICE_MENU_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isServiceMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'DIAGRAM_MENU_DATA': {
  //     // console.log(`Trace: DIAGRAM_MENU_DATA()`)
  //     let data = action.payload
  //     let diagramClickMenu = {
  //       ...state.display.diagramClickMenu,
  //       // itemId: data.itemId,
  //       offset: data.mouseOffset,
  //     }
  //     let display = {
  //       ...state.display,
  //       diagramClickMenu: diagramClickMenu,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'DIAGRAM_MENU_OFF': {
  //     // console.log(`Trace: DIAGRAM_MENU_OFF()`)
  //     let display = {
  //       isDiagramMenu: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'DIAGRAM_MENU_ON': {
  //     // console.log(`Trace: DIAGRAM_MENU_ON()`)
  //     let display = {
  //       ...state.display,
  //       isDiagramMenu: true,
  //       isAnyMenuOpen: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SEND_TO_CONSOLE': {
  //     // console.log(`Trace: SEND_TO_CONSOLE()`)
  //     let data = action.payload
  //     let display = {
  //       ...state.display,
  //       isConsoleOpen: true,
  //     }
  //     let dataPackets = {
  //       ...state.dataPackets,
  //       fromDiagram: data,
  //     }
  //     return {
  //       ...state,
  //       dataPackets: dataPackets,
  //       display: display,
  //     }
  //   }

  //   case 'SET_BOARDOBJ': {
  //     // console.log(`Trace: SET_BOARDOBJ()`)
  //     let data = action.payload.boardObj
  //     let boardObj = data
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   // CHANGE UPDATE OR NEW NOTE STICKY COLOR

  //   case 'ONCHANGE_ITEM_COLOR': {
  //     // console.log(`Trace: ONCHANGE_ITEM_COLOR()`)
  //     let data = action.payload.itemBColor
  //     let [note, displayedItems] = noteSetup()
  //     note.itemBColor = data
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'ONCHANGE_ITEM_FONT_COLOR': {
  //     // console.log(`Trace: ONCHANGE_ITEM_FONT_COLOR()`)
  //     let data = action.payload.fontColor
  //     let [note, displayedItems] = noteSetup()
  //     note.fontColor = data
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'ONCHANGE_ITEM_BORDER_COLOR': {
  //     // console.log(`Trace: ONCHANGE_ITEM_BORDER_COLOR()`)
  //     let data = action.payload.borderColor
  //     let [note, displayedItems] = noteSetup()
  //     note.borderColor = data
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'ONCHANGE_ITEM_BORDER_WEIGHT': {
  //     // console.log(`Trace: ONCHANGE_ITEM_BORDER_WEIGHT()`)
  //     let data = action.payload.borderWeight
  //     let [note, displayedItems] = noteSetup()
  //     note.borderWeight = data
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'ONCHANGE_CONN_COLOR': {
  //     // console.log(`Trace: ONCHANGE_CONN_COLOR()`)
  //     let data = action.payload.itemBColor
  //     let [conn, connectorArray] = connSetup()
  //     conn.itemBColor = data
  //     return {
  //       ...state,
  //       connectorArray: connectorArray,
  //     }
  //   }

  //   // INTERNAL SAVE STATE //

  //   case 'CREATE_SAVE_STATE': {
  //     // console.log(`Trace: CREATE_SAVE_STATE()`)
  //     let data = action?.payload
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       name: data.name ? cloneDeep(data.name) : cloneDeep(state.boardObj.name),
  //       displayedItems: data.displayedItems
  //         ? cloneDeep(data.displayedItems)
  //         : cloneDeep(state.displayedItems),
  //       connectorArray: data.connectorArray
  //         ? cloneDeep(data.connectorArray)
  //         : cloneDeep(state.connectorArray),
  //       backgroundColor: data.backgroundColor
  //         ? data.backgroundColor
  //         : state.boardObj.backgroundColor,
  //     }
  //     let newSaveState = newBoardObj
  //     let newInternalSaveState = [...state.internalSaveState]
  //     if (state.internalSaveIndex + 1 < newInternalSaveState.length) {
  //       let shortenedSaveState = newInternalSaveState.slice(
  //         0,
  //         state.internalSaveIndex + 1
  //       )
  //       newInternalSaveState = shortenedSaveState
  //     }
  //     newInternalSaveState.push(newSaveState)
  //     let newInternalSaveIndex = newInternalSaveState.length - 1
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //       internalSaveState: newInternalSaveState,
  //       internalSaveIndex: newInternalSaveIndex,
  //     }
  //   }

  //   case 'SET_SAVE_STATE_COUNT': {
  //     // console.log(`Trace: SET_SAVE_STATE_COUNT()`)
  //     let data = action.payload.count
  //     let newInternalSaveIndex = data
  //     return {
  //       ...state,
  //       internalSaveIndex: newInternalSaveIndex,
  //     }
  //   }

  //   case 'SET_MOST_RECENT_GCP_CLICK': {
  //     // console.log(`Trace: SET_MOST_RECENT_GCP_CLICK()`)
  //     let data = action.payload.mostRecentGCPId
  //     let mostRecentGCPId = Number(data)
  //     return {
  //       ...state,
  //       mostRecentGCPId: mostRecentGCPId,
  //     }
  //   }

  //   case 'TOG_SERVICE_TOOLBAR': {
  //     // console.log(`Trace: TOG_SERVICE_TOOLBAR()`)
  //     let display = {
  //       ...state.display,
  //       isServiceToolbarOpen: !state.display.isServiceToolbarOpen,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_SERVICE_CATEGORY': {
  //     // console.log(`Trace: TOG_SERVICE_CATEGORY()`)
  //     let data = action.payload.category
  //     let computeCategory = state.display.isServiceTBComputeOpen
  //     let databasesCategory = state.display.isServiceTBDatabasesOpen
  //     let serverlessCategory = state.display.isServiceTBServerlessOpen
  //     let storageCategory = state.display.isServiceTBStorageOpen

  //     switch (data) {
  //       case 'compute':
  //         computeCategory = !state.display.isServiceTBComputeOpen
  //         break

  //       case 'databases':
  //         databasesCategory = !state.display.isServiceTBDatabasesOpen
  //         break

  //       case 'serverless':
  //         serverlessCategory = !state.display.isServiceTBServerlessOpen
  //         break

  //       case 'storage':
  //         storageCategory = !state.display.isServiceTBStorageOpen
  //         break

  //       default:
  //         break
  //     }
  //     let display = {
  //       ...state.display,
  //       isServiceTBComputeOpen: computeCategory,
  //       isServiceTBDatabasesOpen: databasesCategory,
  //       isServiceTBServerlessOpen: serverlessCategory,
  //       isServiceTBStorageOpen: storageCategory,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_SERVICE_SEARCH_RESULTS': {
  //     // console.log(`Trace: SET_SERVICE_SEARCH_RESULTS()`)
  //     let data = action.payload.results
  //     let display = {
  //       ...state.display,
  //       serviceSearchResults: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SERVICE_SEARCH_TOG': {
  //     // console.log(`Trace: SERVICE_SEARCH_TOG()`)
  //     let data = action.payload
  //     let display = {
  //       ...state.display,
  //       isServiceSearchDisplay: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_COMPANY_NAME': {
  //     // console.log(`Trace: SET_COMPANY_NAME()`)
  //     let data = action.payload
  //     return {
  //       ...state,
  //       companyName: data.companyName,
  //     }
  //   }

  //   case 'SET_DEVICE_SCALE': {
  //     // console.log(`Trace: SET_DEVICE_SCALE()`)
  //     let data = action.payload
  //     let display = {
  //       ...state.display,
  //       deviceScaling: data.deviceScaling,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'INITIAL_MODAL_OPEN': {
  //     // console.log(`Trace: INITIAL_MODAL_OPEN()`)
  //     let display = {
  //       ...state.display,
  //       isInitialModal: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_ITEM_FONTSIZE': {
  //     // console.log(`Trace: SET_ITEM_FONTSIZE()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload.fontSize
  //     note && (note.fontSize = data)
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_ITEM_FONTFAMILY': {
  //     // console.log(`Trace: SET_ITEM_FONTFAMILY()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload.fontFamily
  //     note && (note.fontFamily = data)
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_ITEM_TEXTALIGN': {
  //     // console.log(`Trace: SET_ITEM_TEXTALIGN()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload.textAlign
  //     note && (note.textAlign = data)
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_ITEM_TEXT_DECORATION': {
  //     // console.log(`Trace: SET_ITEM_TEXT_DECORATION()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload
  //     if (data.textDecoration === 'bold') {
  //       note.isBold = data.value
  //     }
  //     if (data.textDecoration === 'italics') {
  //       note.isItalic = data.value
  //     }
  //     if (data.textDecoration === 'underline') {
  //       note.isUnderline = data.value
  //     }
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_SERVICE_STATUS': {
  //     // console.log(`Trace: SET_SERVICE_STATUS()`)
  //     let [note, displayedItems] = noteSetup()
  //     let data = action.payload.serviceStatus
  //     note && (note.serviceStatus = data)
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   // case 'SET_SERVICE_BORDER_WIDTH': {
  //   // console.log(`Trace: SET_SERVICE_BORDER_WIDTH()`)
  //   //   let [note, displayedItems] = noteSetup()
  //   //   let data = action.payload.serviceStatus
  //   //   note && (note.serviceStatus = data)
  //   //   return {
  //   //     ...state,
  //   //     displayedItems: displayedItems
  //   //   }
  //   // }

  //   // case 'SET_SERVICE_BORDER_COLOR': {
  //   // console.log(`Trace: SET_SERVICE_BORDER_COLOR()`)
  //   //   let [note, displayedItems] = noteSetup()
  //   //   let data = action.payload.serviceStatus
  //   //   note && (note.serviceStatus = data)
  //   //   return {
  //   //     ...state,
  //   //     displayedItems: displayedItems
  //   //   }
  //   // }

  //   case 'SET_BOARD_ZOOM': {
  //     // console.log(`Trace: SET_BOARD_ZOOM()`)
  //     let data = action.payload.boardZoom
  //     let display = {
  //       ...state.display,
  //       boardZoom: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ADJUST_CONSOLE_WIDTH': {
  //     // console.log(`Trace: ADJUST_CONSOLE_WIDTH()`)
  //     let data = action.payload.consoleWidth
  //     let display = {
  //       ...state.display,
  //       consoleWidth: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ADJUST_CONSOLE_DIVIDER_HEIGHT': {
  //     // console.log(`Trace: ADJUST_CONSOLE_DIVIDER_HEIGHT()`)
  //     let data = action.payload.consoleDividerHeight
  //     let display = {
  //       ...state.display,
  //       consoleDividerHeight: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ADJUST_CONSOLE_EXPLORER_WIDTH': {
  //     // console.log(`Trace: ADJUST_CONSOLE_EXPLORER_WIDTH()`)
  //     let data = action.payload.consoleFileExplorerWidth
  //     let display = {
  //       ...state.display,
  //       consoleFileExplorerWidth: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ADJUST_PROVPANE_WIDTH': {
  //     // console.log(`Trace: ADJUST_PROVPANE_WIDTH()`)
  //     let data = action.payload.provPaneWidth
  //     let display = {
  //       ...state.display,
  //       provPaneWidth: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ADJUST_PROVPANE_DIVIDER_HEIGHT': {
  //     // console.log(`Trace: ADJUST_PROVPANE_DIVIDER_HEIGHT()`)
  //     let data = action.payload.provPaneDividerHeight
  //     let display = {
  //       ...state.display,
  //       provPaneDividerHeight: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'ADJUST_PROVPANE_EXPLORER_WIDTH': {
  //     // console.log(`Trace: ADJUST_PROVPANE_EXPLORER_WIDTH()`)
  //     let data = action.payload.provPaneFileExplorerWidth
  //     let display = {
  //       ...state.display,
  //       provPaneFileExplorerWidth: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'OPEN_CONFIG_MODAL': {
  //     // console.log(`Trace: OPEN_CONFIG_MODAL()`)
  //     let display = {
  //       ...state.display,
  //       isConfigModal: true,
  //     }
  //     let editorData = {
  //       ...state.editorData,
  //       currentServiceId: action.payload.currentServiceId,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'CLOSE_CONFIG_MODAL': {
  //     // console.log(`Trace: CLOSE_CONFIG_MODAL()`)
  //     let display = {
  //       ...state.display,
  //       isConfigModal: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_WORKING_RESOURCE_OBJECT': {
  //     // console.log(`Trace: SET_WORKING_RESOURCE_OBJECT()`)
  //     let data = action.payload.resourceConfigObject
  //     let editorData = {
  //       ...state.editorData,
  //       resourceConfigObject: data,
  //     }
  //     return {
  //       ...state,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'CREATE_CODEFILE': {
  //     // console.log(`Trace: CREATE_CODEFILE()`)
  //     let data = action.payload.newFile
  //     let boardObj = {
  //       ...state.boardObj,
  //       resourcesObjectArray: [...state.boardObj.resourcesObjectArray, data],
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'MAKE_CODEFILE_ACTIVE': {
  //     // console.log(`Trace: MAKE_CODEFILE_ACTIVE()`)
  //     let data = action.payload.activeFileId
  //     let editorData = {
  //       ...state.editorData,
  //       activeFileId: data,
  //     }
  //     return {
  //       ...state,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'TOG_COMMENT_CHAIN': {
  //     // console.log(`Trace: TOG_COMMENT_CHAIN()`)
  //     let [note, displayedItems] = noteSetup()
  //     note.isChainDisplayed = !note.isChainDisplayed
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'DRAG_CLICK_COORD': {
  //     // console.log(`Trace: DRAG_CLICK_COORD()`)
  //     let data = action.payload
  //     let display = {
  //       ...state.display,
  //       dragClickCoords: {
  //         x: data.x,
  //         y: data.y,
  //       },
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'NW_RESIZER': {
  //     // console.log(`Trace: NW_RESIZER()`)
  //     let data = action.payload.dragOffset
  //     let [note, displayedItems] = noteSetup()
  //     note.width =
  //       parseFloat(state.display.dimensionsOnResizeStart.width) + data.x
  //     note.height =
  //       parseFloat(state.display.dimensionsOnResizeStart.height) + data.y
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'NE_RESIZER': {
  //     // console.log(`Trace: NE_RESIZER()`)
  //     let data = action.payload.dragOffset
  //     let [note, displayedItems] = noteSetup()

  //     note.width =
  //       parseFloat(state.display.dimensionsOnResizeStart.width) - data.x
  //     note.height =
  //       parseFloat(state.display.dimensionsOnResizeStart.height) + data.y
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SW_RESIZER': {
  //     // console.log(`Trace: SW_RESIZER()`)
  //     let data = action.payload.dragOffset
  //     let [note, displayedItems] = noteSetup()
  //     note.width =
  //       parseFloat(state.display.dimensionsOnResizeStart.width) + data.x
  //     note.height =
  //       parseFloat(state.display.dimensionsOnResizeStart.height) - data.y
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SE_RESIZER': {
  //     // console.log(`Trace: SE_RESIZER()`)
  //     let data = action.payload.dragOffset
  //     let [note, displayedItems] = noteSetup()
  //     note.width =
  //       parseFloat(state.display.dimensionsOnResizeStart.width) - data.x
  //     note.height =
  //       parseFloat(state.display.dimensionsOnResizeStart.height) - data.y
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SIZE_ON_RESIZE_START': {
  //     // console.log(`Trace: SIZE_ON_RESIZE_START()`)
  //     let data = action.payload
  //     let display = {
  //       ...state.display,
  //       dimensionsOnResizeStart: data.dimensions,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'RESIZE_ITEM': {
  //     // console.log(`Trace: RESIZE_ITEM()`)
  //     let data = action.payload.newDimensions
  //     let [note, displayedItems] = noteSetup()
  //     note.width = data?.width
  //     note.height = data?.height
  //     return {
  //       ...state,
  //       displayedItems: displayedItems,
  //     }
  //   }

  //   case 'SET_NEW_BOARD_RESOURCE_OBJECT': {
  //     // console.log(`Trace: SET_NEW_BOARD_RESOURCE_OBJECT()`)
  //     let data = action.payload.resourceObj
  //     let newResourcesFileArray = [...state.boardObj.resourcesObjectArray]
  //     newResourcesFileArray.push(data)
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       resourcesObjectArray: newResourcesFileArray,
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'SET_RESOURCE_OBJECT_ARRAY': {
  //     // console.log(`Trace: SET_RESOURCE_OBJECT_ARRAY()`)
  //     let data = action.payload.resourcesObjectArray
  //     let newResourcesFileArray = [...data]
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       resourcesObjectArray: newResourcesFileArray,
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'UPDATE_CODEFILE': {
  //     // console.log(`Trace: UPDATE_CODEFILE()`)
  //     let data = action.payload
  //     let newResourcesObjectArray = [...state.boardObj.resourcesObjectArray]
  //     let newResourceData =
  //       newResourcesObjectArray[
  //         indexFinder(newResourcesObjectArray, data.resourceId)
  //       ]
  //     newResourceData.fileArray.forEach((file: any) => {
  //       if (file.filename === data.filename) {
  //         file.codeContent = data.codeContent
  //       }
  //     })
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       resourcesObjectArray: newResourcesObjectArray,
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'SET_ACE': {
  //     // console.log(`Trace: SET_ACE()`)
  //     return {
  //       ...state,
  //       aceObj: action.payload.aceObj,
  //     }
  //   }

  //   case 'REFRESH_CODE_PANE_OFF': {
  //     // console.log(`Trace: REFRESH_CODE_PANE_OFF()`)
  //     let editorData = {
  //       ...state.editorData,
  //       isRefreshed: false,
  //     }
  //     return {
  //       ...state,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'REFRESH_CODE_PANE_ON': {
  //     // console.log(`Trace: REFRESH_CODE_PANE_ON()`)
  //     let editorData = {
  //       ...state.editorData,
  //       isRefreshed: true,
  //     }
  //     return {
  //       ...state,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'SET_LAST_FILE_VIEWED': {
  //     // console.log(`Trace: SET_LAST_FILE_VIEWED()`)
  //     let data = action.payload
  //     let resourcesObjectArray = [...state.boardObj.resourcesObjectArray]
  //     let resourceData =
  //       resourcesObjectArray[indexFinder(resourcesObjectArray, data.resourceId)]
  //     resourceData.lastFileViewed = data.lastFileViewed
  //     let boardObj = {
  //       ...state.boardObj,
  //       resourcesObjectArray: resourcesObjectArray,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'MAKE_EDITOR_ACTIVE': {
  //     // console.log(`Trace: MAKE_EDITOR_ACTIVE()`)
  //     let editorData = {
  //       ...state.editorData,
  //       isActive: true,
  //     }
  //     return {
  //       ...state,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'MAKE_EDITOR_INACTIVE': {
  //     // console.log(`Trace: MAKE_EDITOR_INACTIVE()`)
  //     let editorData = {
  //       ...state.editorData,
  //       isActive: false,
  //     }
  //     return {
  //       ...state,
  //       editorData: editorData,
  //     }
  //   }

  //   case 'TURN_OFF_NEW_BOARD_MODAL': {
  //     // console.log(`Trace: TURN_OFF_NEW_BOARD_MODAL()`)
  //     let display = {
  //       ...state.display,
  //       isInitialSetup: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TURN_ON_NEW_BOARD_MODAL': {
  //     // console.log(`Trace: TURN_ON_NEW_BOARD_MODAL()`)
  //     let display = {
  //       ...state.display,
  //       isInitialSetup: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_CHANGELOG_PANE': {
  //     // console.log(`Trace: TOG_CHANGELOG_PANE()`)
  //     let data = action.payload.isChangelogPane
  //     let display = {
  //       ...state.display,
  //       isChangelogPane: !data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_CHANGELOG': {
  //     // console.log(`Trace: SET_CHANGELOG()`)
  //     let data = action.payload.changelogArray
  //     return {
  //       ...state,
  //       changelogArray: data,
  //     }
  //   }

  //   case 'TOG_COMMIT_MSG_BAR': {
  //     // console.log(`Trace: TOG_COMMIT_MSG_BAR()`)
  //     let data = action.payload.isCommitMsgBar
  //     let display = {
  //       ...state.display,
  //       isCommitMsgBar: data,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_TO_PRODUCTION': {
  //     // console.log(`Trace: SET_TO_PRODUCTION()`)
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       environmentSetting: 'Production',
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'SET_ENVIRONMENT': {
  //     // console.log(`Trace: SET_ENVIRONMENT()`)
  //     let data = action.payload
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       environmentSetting: data.keyInput,
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'SET_TO_STAGING': {
  //     // console.log(`Trace: SET_TO_STAGING()`)
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       environmentSetting: 'Staging',
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'SET_TO_DEVELOPMENT': {
  //     // console.log(`Trace: SET_TO_DEVELOPMENT()`)
  //     let newBoardObj = {
  //       ...state.boardObj,
  //       environmentSetting: 'Development',
  //     }
  //     return {
  //       ...state,
  //       boardObj: newBoardObj,
  //     }
  //   }

  //   case 'TOG_ENV_MENU_PROV': {
  //     // console.log(`Trace: TOG_ENV_MENU_PROV()`)
  //     let display = {
  //       ...state.display,
  //       isEnvMenuProvPane: !state.display.isEnvMenuProvPane,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_TERRAFORM_OUTPUT': {
  //     // console.log(`Trace: SET_TERRAFORM_OUTPUT()`)
  //     let data = action.payload.newEntry
  //     let terraformOutput = [...state.terraformOutput]
  //     terraformOutput.push(data)
  //     return {
  //       ...state,
  //       terraformOutput: terraformOutput,
  //     }
  //   }

  //   case 'TOG_REVIEW_PANE': {
  //     // console.log(`Trace: TOG_REVIEW_PANE()`)
  //     let display = {
  //       ...state.display,
  //       isReviewPane: !state.display.isReviewPane,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'REQUEST_REVIEW': {
  //     // console.log(`Trace: REQUEST_REVIEW()`)
  //     let data = action.payload.requestedBy
  //     let boardObj = {
  //       ...state.boardObj,
  //       isReviewRequested: true,
  //       requestedBy: data,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'CANCEL_REVIEW_REQUEST': {
  //     // console.log(`Trace: CANCEL_REVIEW_REQUEST()`)
  //     let boardObj = {
  //       ...state.boardObj,
  //       isReviewRequested: false,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'APPROVE_REVIEW': {
  //     // console.log(`Trace: APPROVE_REVIEW()`)
  //     let data = action.payload.approvedBy
  //     let boardObj = {
  //       ...state.boardObj,
  //       isApproved: true,
  //       approvedBy: data,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'SET_VM_RUNNER': {
  //     // console.log(`Trace: SET_VM_RUNNER()`)
  //     let data = action.payload.response
  //     let latestResponse = data
  //     return {
  //       ...state,
  //       latestResponse: latestResponse,
  //     }
  //   }

  //   case 'PLAN_ERROR': {
  //     // console.log(`Trace: PLAN_ERROR()`)
  //     let boardObj = {
  //       ...state.boardObj,
  //       isPlanRunSuccess: false,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'PLAN_SUCCESS': {
  //     // console.log(`Trace: PLAN_SUCCESS()`)
  //     let boardObj = {
  //       ...state.boardObj,
  //       isPlanRunSuccess: true,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'PLAN_RUN': {
  //     // console.log(`Trace: PLAN_RUN()`)
  //     let boardObj = {
  //       ...state.boardObj,
  //       isPlanRun: true,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'PLAN_APPLIED': {
  //     // console.log(`Trace: PLAN_APPLIED()`)
  //     let boardObj = {
  //       ...state.boardObj,
  //       isApplied: true,
  //     }
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'SAVE_MODAL_ON': {
  //     // console.log(`Trace: SAVE_MODAL_ON()`)
  //     let display = {
  //       ...state.display,
  //       isSaveModal: true,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SAVE_MODAL_OFF': {
  //     // console.log(`Trace: SAVE_MODAL_OFF()`)
  //     let display = {
  //       ...state.display,
  //       isSaveModal: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'RESET_PROV_FLOW': {
  //     // console.log(`Trace: RESET_PROV_FLOW()`)
  //     let boardObj = {
  //       ...state.boardObj,
  //       isPlanRun: false,
  //       isPlanRunSuccess: false,
  //       isApproved: false,
  //       isApplied: false,
  //       isReviewRequested: false,
  //       requestedBy: '',
  //       reviewMessage: '',
  //     }

  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   // case 'TOG_ACCORD_1': {
  //   //
  //   // console.log(`Trace: function()`)
  //   //   let display = {
  //   //     ...state.display,
  //   //     isStage1Selected1: !state.display.isSelected1,
  //   //     isStage1Selected4: false,
  //   //     isStage1Selected3: false,
  //   //     isSelected2: false,
  //   //   }
  //   //   return {
  //   //     ...state,
  //   //     display: display
  //   //   }
  //   // }

  //   case 'TOG_ACCORD_2': {
  //     // console.log(`Trace: TOG_ACCORD_2()`)
  //     let display = {
  //       ...state.display,
  //       isSelected2: !state.display.isSelected2,
  //       isSelected4: false,
  //       isSelected3: false,
  //       // isSelected1: false
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_ACCORD_3': {
  //     // console.log(`Trace: TOG_ACCORD_3()`)
  //     let display = {
  //       ...state.display,
  //       isSelected3: !state.display.isSelected3,
  //       isSelected4: false,
  //       isSelected2: false,
  //       // isSelected1: false
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_ACCORD_4': {
  //     // console.log(`Trace: TOG_ACCORD_4()`)
  //     let display = {
  //       ...state.display,
  //       isSelected4: !state.display.isSelected4,
  //       isSelected3: false,
  //       isSelected2: false,
  //       // isSelected1: false
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_CONTROL': {
  //     // console.log(`Trace: TOG_CONTROL()`)
  //     let display = {
  //       ...state.display,
  //       isControl: !state.display.isControl,
  //       isDiagram: false,
  //       isExisting: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_DIAGRAM': {
  //     // console.log(`Trace: TOG_DIAGRAM()`)
  //     let display = {
  //       ...state.display,
  //       isControl: false,
  //       isExisting: false,
  //       isDiagram: !state.display.isDiagram,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TOG_EXISTING': {
  //     // console.log(`Trace: TOG_EXISTING()`)
  //     let display = {
  //       ...state.display,
  //       isControl: false,
  //       isDiagram: false,
  //       isExisting: !state.display.isExisting,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TO_NEW_OPTIONS': {
  //     // console.log(`Trace: TO_NEW_OPTIONS()`)
  //     let display = {
  //       ...state.display,
  //       isCreateStage: false,
  //       isNameStage: false,
  //       isNewMultiEnviron: state.display.isSelected2,
  //       isExistingGCP: state.display.isSelected1,
  //       isChooseExistingMulti: state.display.isSelected3,
  //       isNewProject: state.display.isSelected4,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TO_NAME_STAGE': {
  //     // console.log(`Trace: TO_NAME_STAGE()`)
  //     let display = {
  //       ...state.display,
  //       isNameStage: true,
  //       isCreateStage: false,
  //       isNewMultiEnviron: false,
  //       isExistingGCP: false,
  //       isChooseExistingMulti: false,
  //       isConfirmStage: false,
  //       isSelected1: false,
  //       isSelected2: false,
  //       isSelected3: false,
  //       isSelected4: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'TO_CREATE_STAGE': {
  //     // console.log(`Trace: TO_CREATE_STAGE()`)
  //     let display = {
  //       ...state.display,
  //       isNameStage: false,
  //       isCreateStage: true,
  //       isNewMultiEnviron: false,
  //       isExistingGCP: false,
  //       isChooseExistingMulti: false,
  //       isConfirmStage: false,
  //       isNewProject: false,
  //       isSelected1: false,
  //       isSelected2: false,
  //       isSelected3: false,
  //       isSelected4: false,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

  //   case 'SET_SERVICE_ACCOUNT_ARRAY': {
  //     // console.log(`Trace: SET_SERVICE_ACCOUNT_ARRAY()`)
  //     let data = action.payload
  //     let boardObj = state.boardObj
  //     boardObj.serviceAccountKeyArray = data.keyArray
  //     return {
  //       ...state,
  //       boardObj: boardObj,
  //     }
  //   }

  //   case 'SET_TEMP_SERVICE_ACCOUNT_ARRAY': {
  //     // console.log(`Trace: SET_TEMP_SERVICE_ACCOUNT_ARRAY()`)
  //     let data = action.payload
  //     let array = [...data.keyArray]
  //     return {
  //       ...state,
  //       tempServiceAccountKeyArray: array,
  //     }
  //   }

  //   case 'TOG_BOARD_SETTINGS': {
  //     // console.log(`Trace: TOG_BOARD_SETTINGS()`)
  //     let display = {
  //       ...state.display,
  //       isBoardSettings: !state.display.isBoardSettings,
  //     }
  //     return {
  //       ...state,
  //       display: display,
  //     }
  //   }

    // case 'SAVE_ALL_TO_STATE': {
    // // console.log(`Trace: function()`)
    //   let editorData = {
    //     ...state.editorData,
    //     saveAll: true
    //   }
    //   return {
    //     ...state,
    //     editorData: editorData
    //   }
    // }

    default: {
      return state
    }
  }
}

/* END of document ***********************************************************/
