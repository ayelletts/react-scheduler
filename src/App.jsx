import * as React from 'react';
import { useRef } from "react";
import { PropertyPane } from './components/PropertyPane.js';
import { loadCldr} from '@syncfusion/ej2-base';
// import riderStyles from './components/Rider/style.module.css';
import { 
  ScheduleComponent, 
  Day, 
  Week, 
  WorkWeek, 
  Month, 
  DragAndDrop, 
  Inject,
  ResourcesDirective,
ResourceDirective } from '@syncfusion/ej2-react-schedule';
import { addClass } from '@syncfusion/ej2-base';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
//import { PropertyPane } from './components/PropertyPane.js';
// import Rider from './components/Rider/index.jsx';
// //Localization
// import * as numberingSystems from './culture-files/numberingSystems.json';
// import * as gregorian from './culture-files/ca-gregorian.json';
// import * as numbers from './culture-files/numbers.json';
// import * as timeZoneNames from './culture-files/timeZoneNames.json';
// import { L10n } from '@syncfusion/ej2-base'; 
// loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

// L10n.load({
//   he: {
//     schedule: {
//       day: 'יום',
//       week: 'שבוע',
//       workWeek: 'שבוע עבודה',
//       month: 'חודש',
//       year: 'שָׁנָה',
//       agenda: 'סדר יום',
//       weekAgenda: 'סדר יום בשבוע',
//       workWeekAgenda: 'סדר יום של שבוע עבודה',
//       monthAgenda: 'סדר יום לחודש',
//       today: 'היום',
//       noEvents: 'אין אירועים',
//       emptyContainer: 'לא נקבעו אירועים ביום זה.',
//       allDay: 'כל היום',
//       start: 'התחל',
//       end: 'סוף',
//       more: 'יותר',
//       close: 'סגור',
//       cancel: 'בטל',
//       noTitle: '(ללא כותרת)',
//       delete: 'מחק',
//       deleteEvent: 'האירוע הזה',
//       deleteMultipleEvent: 'מחק אירועים מרובים',
//       selectedItems: 'פריטים שנבחרו',
//       deleteSeries: 'סדרה שלמה',
//       edit: 'ערוך',
//       editSeries: 'סדרה שלמה',
//       editEvent: 'האירוע הזה',
//       createEvent: 'צור',
//       subject: 'נושא',
//       addTitle: 'הוסף כותרת',
//       moreDetails: 'פרטים נוספים',
//       save: 'שמור',
//       editContent: 'איך תרצה לשנות את המינוי בסדרה?',
//       deleteContent: 'האם אתה בטוח שברצונך למחוק אירוע זה?',
//       deleteMultipleContent: 'האם אתה בטוח שברצונך למחוק את האירועים שנבחרו?',
//       newEvent: 'אירוע חדש',
//       title: 'כותרת',
//       location: 'מקום',
//       description: 'תיאור',
//       timezone: 'אזור זמן',
//       startTimezone: 'התחל את אזור הזמן',
//       endTimezone: 'אזור זמן סיום',
//       repeat: 'חזור',
//       saveButton: 'שמור',
//       cancelButton: 'בטל',
//       deleteButton: 'מחק',
//       recurrence: 'הישנות',
//       wrongPattern: 'דפוס הישנות אינו תקף.',
//       seriesChangeAlert:
//         'האם ברצונך לבטל את השינויים שבוצעו במקרים ספציפיים של הסדרה הזו ולהתאים אותה לסדרה כולה שוב?',
//       createError:
//         'משך האירוע חייב להיות קצר יותר מתדירות התרחשותו. קצר את משך הזמן, או שנה את דפוס הישנות בעורך אירוע הישנות.',
//       sameDayAlert: 'שני התרחשויות של אותו אירוע לא יכולים להתרחש באותו יום.',
//       occurenceAlert:
//         'לא ניתן לתזמן מחדש התרחשות של הפגישה החוזרת אם היא מדלגת על התרחשות מאוחרת יותר של אותו פגישה.',
//       editRecurrence: 'ערוך הישנות',
//       repeats: 'חוזר',
//       alert: 'התראה',
//       startEndError: 'תאריך הסיום שנבחר מתרחש לפני תאריך ההתחלה.',
//       invalidDateError: 'ערך התאריך שהוזן אינו חוקי.',
//       blockAlert: 'לא ניתן לתזמן אירועים בטווח הזמן החסום.',
//       ok: 'בסדר',
//       yes: 'כן',
//       no: 'לא',
//       occurrence: 'התרחשות',
//       series: 'סדרה',
//       previous: 'קודם',
//       next: 'הבא',
//       timelineDay: 'יום ציר הזמן',
//       timelineWeek: 'שבוע ציר הזמן',
//       timelineWorkWeek: 'שבוע עבודה של ציר זמן',
//       timelineMonth: 'חודש ציר זמן',
//       timelineYear: 'שנת ציר זמן',
//       editFollowingEvent: 'בעקבות האירועים',
//       deleteTitle: 'מחק אירוע',
//       editTitle: 'ערוך אירוע',
//       beginFrom: 'התחל מ',
//       endAt: 'נגמר ב',
//       expandAllDaySection: 'הרחב את החלק כל היום',
//       collapseAllDaySection: 'קטע כווץ כל היום',
//       searchTimezone: 'חפש באזור זמן',
//       noRecords: 'לא נמצאו שיאים',
//     },
//     recurrenceeditor: {
//       none: 'ללא חזרה',
//       daily: 'יומי',
//       weekly: 'שבועי',
//       monthly: 'חודשי',
//       month: 'חודש',
//       yearly: 'שנתי',
//       never: 'לעולם לא',
//       until: 'עד',
//       count: 'לספור',
//       first: 'ראשון',
//       second: 'שני',
//       third: 'שלישית',
//       fourth: 'רביעי',
//       last: 'אחרון',
//       repeat: 'חזור',
//       repeatEvery: 'חזור על כל אחד',
//       on: 'חזור על',
//       end: 'סוף',
//       onDay: 'יום',
//       days: 'יום (ים)',
//       weeks: 'שבוע (ים)',
//       months: 'חודש (ים)',
//       years: 'שנה (ים)',
//       every: 'כל',
//       summaryTimes: 'זמן (ים)',
//       summaryOn: 'ב',
//       summaryUntil: 'עד',
//       summaryRepeat: 'חוזר',
//       summaryDay: 'יום (ים)',
//       summaryWeek: 'שבוע (ים)',
//       summaryMonth: 'חודש (ים)',
//       summaryYear: 'שנה (ים)',
//       monthWeek: 'שבוע החודש',
//       monthPosition: 'מיקום חודש',
//       monthExpander: 'מרחיב חודש',
//       yearExpander: 'שנה מרחיבה',
//       repeatInterval: 'מרווח חוזר',
//     },
//     calendar: {
//       today: 'היום',
//     },
//   },
// });

//Localization

 const dataSource = require('./json/dataSource.json');

function App() {
  let scheduleObj = useRef(null);
  const timeScale = { enable: true, interval: 30, slotCount: 2 };
  const data = dataSource.scheduleData;
  const fieldsData = {
    id: 'Id',
    subject: { title: 'רוכב:', name: 'RiderName' },
    description: { title: 'סיכום שיעור', name: 'Description' },
    startTime: { title: 'שעת התחלה', name: 'StartTime' },
    endTime: { title: 'שעת סיום', name: 'EndTime' }
  }

  const eventTemplate = (props) => {
    const dims = { width: '30px', height: '30px', margin: '5px'};
    let financierImgUrl = require('./assets/images/ClalitIcon.png');   
    // switch(props.Financier){
    //     case 1: 
    //         financierImgUrl = require('./assets/images/ClalitIcon.png');
    //         break;
    //     case 2: 
    //         financierImgUrl = require('./assets/images/MaccabiIcon.png');
    //         break;
    //     case 3: 
    //         financierImgUrl = require('./assets/images/MeuhedetIcon.png');
    //         break;
    //     case 4: 
    //         financierImgUrl = require('./assets/images/LeumitIcon.png');
    //         break;
    //     default:
    //         financierImgUrl = require('./assets/images/HAlonIcon.png');
    //         break;
    // }
    return (<div className="template-wrap" >
      <div className='template'>
      <div className="subject">
        <div className='riderName'>{props.RiderName + (props.Age != null ? " (" + props.Age  + ")": "")}</div></div>
      <div className="image">
        <img src={financierImgUrl} alt="Financier" style={dims}/></div>
      </div>
    </div>);
  }
  
  const eventSettings = { dataSource: data, fields: fieldsData, template: eventTemplate, ignoreWhitespace: true }
  
  const editorTemplate = (props) => {
   
    return props !== undefined ? (
     
      <table className="custom-event-editor">
        <tbody>
          {/* <tr>
            <td className="e-textlabel" id="tdRiders">
              Rider
            </td>
            <td colSpan={4}>
              {props.RiderName !== undefined ? (
                <Rider
                  key={props.Id}
                  name={props.RiderName}
                  financier={props.Financier}
                  age={props.Age}
                ></Rider>
              ) : (
                <DropDownListComponent
                  id="AllRiders"
                  placeholder="Choose rider"
                  data-name="AllRiders"
                  className="e-field"
                  dataSource={["אלעד", "רוני", "איתי", "גיא", "דניאל"]}
                  value={props.EventType || null}
                ></DropDownListComponent>
              )}
            </td>
          </tr> */}
          <tr>
            <td className="e-textlabel">Status</td>
            <td colSpan={4}>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                dataSource={["New", "Requested", "Confirmed"]}
                value={props.EventType || null}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="EndTime"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Owner</td>
            <td colSpan={4}>
              <MultiSelectComponent
                className="e-field"
                placeholder="Choose owner"
                data-name="ResourceID"
                dataSource={resourceDataSource}
                fields={fields}
                value={[props.Id]}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Reason</td>
            <td colSpan={4}>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      // </div>
    ) : (
      <div></div>
    );
}

const resourceDataSource = dataSource.resources;
// [
//     {Name: "יאיר קובי", Id: 9, Color: '#ea7a57', workDays: [0, 1, 2, 4], startHour: '14:00', endHour: '20:30'},
//     {Name: "ניר קליימן", Id: 8, Color: '#357CD2', workDays: [0, 1, 2], startHour: '14:00', endHour: '19:30'},
//     {Name: "חגי הלוי", Id: 47, Color: '#7fa900', workDays: [ 0, 2, 3], startHour: '14:00', endHour: '18:30'},
// ];
const fields = { text: 'Name', value: 'Id' };

const resourceHeaderTemplate = (props) => {
    return (
      <div className="template-wrap">
        <div className="resource-detail">
          <div className="resource-name">{getResourceName(props)}</div>
          <div className="resource-designation">{getResourceRole(props)}</div>
        </div>
      </div>
    );
  };

  const getResourceName = (value) => {
    return value.resourceData
      ? value.resourceData[value.resource.textField]
      : value.resourceName;
  };

  const getResourceRole = (value) => {
    let resourceName = getResourceName(value);
    return resourceName === 'רותי'
      ? 'מנהלת'
      : resourceName === 'סיגל'
      ? 'מזכירה'
      : 'מדריך רכיבה';
  };

  const onRenderCell = (args) => {
    if (args !== undefined && args !== null && args.element !== undefined && args.element !== null && 
      (args.element.classList.contains('e-work-hours') ||
      args.element.classList.contains('e-work-cells'))
    ) {
      addClass(
        [args.element],
        ['willsmith', 'alice', 'robson'][
          parseInt(args.element.getAttribute('data-group-index'), 10)
        ]
      );
    }
  };

const onEventRendered = (args) => {
    //alert('onEventRendered');
};
  const onCreate = (args) => {
    // alert('Load');
};
const onActionBegin = (args) => {
    // alert('Action Begin');
};
const onActionComplete = (args) => {
    // alert('Action Complete');
};
const onActionFailure = (args) => {
    // alert('Action Failure');
};
const onCellDoubleClick = (args) => {
    // alert('Cell Double Click');
};
const onCellClick = (args) => {
    // alert('Cell Click');
};
const onNavigating = (args) => {
    // alert('Navigating');
};
const onDestroyed = (args) => {
    // alert('Destroyed');
};
const onEventClick = (args) => {
    // alert('Event Click');
};
const onPopupOpen = (args) => {
    // alert('Popup Open');
};
const onPopupClose = (args) => {
  // alert('Popup Close');
  if(args.type === "Editor" && args.event && args.event.target.classList.contains('e-event-save'))
  {
    let newEvent = {
      Id: 4,
      Subject: 'Meeting 4',
      StartTime: args.data.StartTime,
      EndTime: args.data.EndTime,
      ResourceID: args.data.ResourceID[0],
      Rider: args.data.Rider
    }

    //data.push(newEvent);
  }
};
const onChange = (args) => {
  let value = parseInt(args.event.currentTarget.querySelector('input').getAttribute('value'), 10);
  let resourceData = resourceDataSource.filter((resource) => resource.Id === value);
  if (args.checked) {
      scheduleObj.current.addResource(resourceData[0], 'Instructors', value - 1);
  }
  else {
      scheduleObj.current.removeResource(value, 'Instructors');
  }
};

  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
      <div className='col-lg-3 property-section'>
        <PropertyPane title='בחר מדריכים להצגה' className='float-right'>
                <ul className='no-bullets'>
                    <li className='float-right'>
                            <CheckBoxComponent value='8' id='Nir' cssClass='alice' checked={true} label='Nir' change={onChange}></CheckBoxComponent>
                    </li>
                    <li className='float-right'>
                            <CheckBoxComponent value='9' id='Yair' cssClass='willsmith' checked={true} label='Yair' change={onChange}></CheckBoxComponent>
                    </li>
                    <li className='float-right'>
                            <CheckBoxComponent value='47' id='Hagay' cssClass='robson' checked={true} label='Hagay' change={onChange}></CheckBoxComponent>
                    </li>
                </ul>
        </PropertyPane>
      </div>
        <div className="control-wrapper">
          <ScheduleComponent
            ref={scheduleObj}
            currentView="Day"
            selectedDate={new Date(2023, 11, 10)}
            eventSettings={eventSettings}
            cssClass="custom-work-days"
            width="auto"
            height="650px"
            resourceHeaderTemplate={resourceHeaderTemplate}
            group={{ resources: ["Instructors"] ,byDate: true, hideNonWorkingDays: true}}
            renderCell={onRenderCell}
            editorTemplate={editorTemplate.bind(this)}
            created={onCreate}
            eventRendered={onEventRendered}
            actionBegin={onActionBegin}
            actionComplete={onActionComplete}
            actionFailure={onActionFailure}
            cellClick={onCellClick}
            cellDoubleClick={onCellDoubleClick}
            destroyed={onDestroyed}
            navigating={onNavigating}
            eventClick={onEventClick}
            popupOpen={onPopupOpen}
            popupClose={onPopupClose}
            // locale="he"
            enableRtl={true}
            startHour="08:00"
            endHour="23:00"
            firstDayOfWeek={0}
            workDays={[0, 1, 2, 3, 4]}
            showWeekend={false}
            timeScale={timeScale}
          >
            <ResourcesDirective>
              <ResourceDirective
                field="ResourceID"
                title="שם המדריך"
                name="Instructors"
                textField="Name"
                idField="Id"
                colorField="Color"
                workDaysField="workDays"
                startHourField="startHour"
                endHourField="endHour"
                groupIDField="groupId"
                dataSource={resourceDataSource}
              ></ResourceDirective>
            </ResourcesDirective>
            <Inject services={[Day, Week, WorkWeek, Month, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
