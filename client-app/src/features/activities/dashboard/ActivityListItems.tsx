import React, { useContext } from "react";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";

export const ActivityListItems: React.FC<{ activity: IActivity }> = ({
  activity,
}) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" />
        {activity.date}
        <Icon name="marker" />
        {activity.venue},{activity.city}
      </Segment>
      <Segment secondary>Attendeed</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};
