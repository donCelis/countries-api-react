const ViewSms = ({ sms = 'Search not found', alert = '', children }) => (
  <div className={`text-center alert alert-${alert}`} role='alert'>
    {sms} {children}
  </div>
)

export default ViewSms
