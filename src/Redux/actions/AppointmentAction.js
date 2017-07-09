export const noOfSeats = (value)=>{
    return {
        type: 'SEATS_BOOK',
        payload: value
    }
}
export const dateSelected = (dateObj)=>{
    return {
        type: 'DATE_SELECTED',
        payload: dateObj
    }
}

export const professionalSelected = (professionalObj)=>{
    return {
        type: 'PROFESSIONAL_SELECTED',
        payload: professionalObj
    }
}
export const timeSelected = (time)=>{
    return {
        type: 'TIME_SELECTED',
        payload: time
    }
}
export const serviceSelected = (serviceObj)=>{
    return {
        type: 'SERVICE_SELECTED',
        payload: serviceObj
    }
}
export const doneAppointment = (appointmentObj)=>{
    return {
        type: 'DONE_APPOINTMENT',
        payload: appointmentObj
    }
}
