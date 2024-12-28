import merge from 'lodash/merge';
//
import { DefaultProps } from './DefaultProps';
//
import { Fab } from './Components/Fab';
import { Card } from './Components/Card';
import { Chip } from './Components/Chip';
import { Tabs } from './Components/Tabs';
import { Menu } from './Components/Menu';
import { List } from './Components/List';
import { Table } from './Components/Table';
import { Alert } from './Components/Alert';
import { Badge } from './Components/Badge';
import { Paper } from './Components/Paper';
import { Radio } from './Components/Radio';
import { AppBar } from './Components/AppBar';
import { Drawer } from './Components/Drawer';
import { Dialog } from './Components/Dialog';
import { Avatar } from './Components/Avatar';
import { Rating } from './Components/Rating';
import { Slider } from './Components/Slider';
import { Button } from './Components/Button';
import { Select } from './Components/Select';
import { Switches } from './Components/Switch';
import { Tooltip } from './Components/Tooltip';
import { Popover } from './Components/Popover';
import { Stepper } from './Components/Stepper';
import { SvgIcon } from './Components/SvgIcon';
import { Skeleton } from './Components/Skeleton';
import { Backdrop } from './Components/Backdrop';
import { Progress } from './Components/Progress';
import { Timeline } from './Components/Timeline';
import { Checkbox } from './Components/Checkbox';
import { DataGrid } from './Components/DataGrid';
import { TreeView } from './Components/TreeView';
import { TextField } from './Components/TextField';
import { Accordion } from './Components/Accordion';
import { Typography } from './Components/Typography';
import { Pagination } from './Components/Pagination';
import { DatePicker } from './Components/DatePicker';
import { Breadcrumbs } from './Components/Breadcrumbs';
import { CssBaseline } from './Components/CssBaseline';
import { ButtonGroup } from './Components/ButtonGroup';
import { Autocomplete } from './Components/Autocomplete';
import { ToggleButton } from './Components/ToggleButton';
import { LoadingButton } from './Components/LoadingButton';

// ----------------------------------------------------------------------

export function componentsOverrides(theme) {
  const components = merge(
    DefaultProps(theme),
    //
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    List(theme),
    Badge(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Radio(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    AppBar(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Switches(theme),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Progress(theme),
    TextField(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    DatePicker(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    CssBaseline(theme),
    Autocomplete(theme),
    ToggleButton(theme),
    LoadingButton(theme),
  );

  return components;
}
