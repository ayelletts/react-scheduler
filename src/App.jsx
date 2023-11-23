import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState } from "react";

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
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  let scheduleObj = useRef(null);
  const [riders, setRiders] = useState([]);
  
  const data = [
    {
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2023, 9, 10, 14, 30),
      EndTime: new Date(2023, 9, 10, 16, 30),
      ResourceID:1,
      Riders: [{name:"אלעד צחי"},{name:"רוני צחי"}]
      
    },
    {
      Id: 1,
      Subject: 'Meeting 2',
      StartTime: new Date(2023, 9, 10, 14, 0),
      EndTime: new Date(2023, 9, 10, 14, 30),
      ResourceID:2,
      Riders: [{name:"אלעד צחי"},{name:"רוני צחי"}]
    },
    {
      Id: 3,
      Subject: 'Meeting 3',
      StartTime: new Date(2023, 9, 10, 15, 0),
      EndTime: new Date(2023, 9, 10, 16, 30),
      ResourceID:3,
      Riders: [{name:"אלעד צחי"},{name:"רוני צחי"}]
    }
  ];
  const fieldsData = {
    //   id: 'Id',
    subject: { title: 'סוג שיעור:', name: 'Subject' },
    description: { title: 'סיכום שיעור', name: 'Description' },
    startTime: { title: 'שעת התחלה', name: 'StartTime' },
    endTime: { title: 'שעת סיום', name: 'EndTime' }
  }
  
  const eventSettings = { dataSource: data, fields: fieldsData }
  
  const editorTemplate = (props) => {
    setRiders([]);
    let tmpRiders = [];
    if(props.Riders !== undefined ){
      props.Riders.forEach(r => {
        tmpRiders.push(r.name); 
      });
      setRiders(tmpRiders);
    }
    return (
      props !== undefined ? 
      <table className="custom-event-editor" >
      <tbody>
        <tr>
          <td className="e-textlabel" id="tdRiders">Riders</td>
          <td colSpan={4}>
            {riders.length > 0 ?
            riders.map((r) => (
          <input type="button" id="Riders" className="e-field" name="Riders" value={r} />
        )) 
      :
      <DropDownListComponent id="AllRiders" placeholder='Choose rider' data-name="AllRiders" className="e-field"  dataSource={['אלעד', 'רוני', 'איתי', 'גיא', 'דניאל']} value={props.EventType || null}></DropDownListComponent>
      }
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Status</td>
          <td colSpan={4}>
            <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field"  dataSource={['New', 'Requested', 'Confirmed']} value={props.EventType || null}></DropDownListComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">From</td>
          <td colSpan={4}>
            <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
          </td>
        </tr>
        <tr><td className="e-textlabel">To</td><td colSpan={4}>
          <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
        </td>
        </tr>
        <tr>
          <td className="e-textlabel">Reason</td>
          <td colSpan={4}>
            <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} ></textarea>
          </td>
        </tr>
    </tbody>
  </table> 
  : <div></div>);
}

const resourceDataSource = [
    {Name: "יאיר קובי", Id: 1, Color: '#ea7a57', workDays: [1, 2, 4, 5], startHour: '14:00', endHour: '20:30'},
    {Name: "ניר קליימן", Id: 2, Color: '#357CD2', workDays: [1, 2, 5], startHour: '14:00', endHour: '19:30'},
    {Name: "חגי הלוי", Id: 3, Color: '#7fa900', workDays: [ 2, 3, 5], startHour: '14:00', endHour: '18:30'},
];

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
    if (args != undefined && args != null && args.element != undefined && args.element != null && 
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

  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
        <div className="control-wrapper">
          
    <ScheduleComponent
       ref={scheduleObj}
      currentView="WorkWeek"
      selectedDate={new Date(2023, 9, 10)}
      eventSettings={eventSettings}
      cssClass="custom-work-days"
      width="50%"
      height="650px"
      resourceHeaderTemplate={resourceHeaderTemplate}
      group={{ resources: ['Instructors'] }}
      renderCell={onRenderCell}
      editorTemplate={editorTemplate.bind(this)}
      created={onCreate} 
      eventRendered={onEventRendered} 
      actionBegin={onActionBegin} 
      actionComplete={onActionComplete} 
      actionFailure={onActionFailure} 
      cellClick={onCellClick} 
      cellDoubleClick={onCellDoubleClick} 
      destroyed={onDestroyed} navigating={onNavigating} 
      eventClick={onEventClick} 
      popupOpen={onPopupOpen}
      
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
