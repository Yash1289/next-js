import AddressIcon from '../icons/address-icon';
import Image from "next/image"
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { date, location : address , image, title : imageAlt  } = props.event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
      <section className={classes.logistics}>
        <div className={classes.image}>
          <Image src={`/${image}`} alt={imageAlt} width={350} height={350} />
        </div>
        <ul className={classes.list}>
          <LogisticsItem icon={DateIcon}>
            <time>{humanReadableDate}</time>
          </LogisticsItem>
          <LogisticsItem icon={AddressIcon}>
            <address>{addressText}</address>
          </LogisticsItem>
        </ul>
      </section>
  );
}

export default EventLogistics;
