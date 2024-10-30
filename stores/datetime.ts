import { defineStore } from 'pinia';
import { date } from 'quasar';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  useReservationsStore,
  useTourDaysStore,
} from './reservations/reservations';

export const useDateTimeStore = defineStore(
  'datetime',
  () => {
    const $route = useRoute();
    const $router = useRouter();
    const viewDayState = ref<Date>(new Date());
    const tourDaysStore = useTourDaysStore();
    const reservationsStore = useReservationsStore();

    interface ViewDayFormats {
      iso: string;
      ita: string;
    }
    const viewDay = computed<ViewDayFormats>(() => {
      return {
        iso: date.formatDate(viewDayState.value, formats.date.iso),
        ita: date.formatDate(viewDayState.value, formats.date.ita),
      };
    });

    const viewDayDate = computed(() => {
      return date.extractDate(viewDay.value.iso, formats.date.iso);
    });

    const formats = {
      date: {
        ita: 'DD/MM/YYYY',
        iso: 'YYYY-MM-DD',
      },
      time: {
        hh: 'HH',
        hhmm: 'HH:mm',
        hhmmss: 'HH:mm:ss',
        hhmmsstz: 'HH:mm:ssZ',
        be: 'HH:mm:ss',
      },
      dateTime: {
        ita: 'DD/MM/YYYY HH:mm:ss',
        iso: 'YYYY-MM-DDTHH:mm:ss',
      },
    };

    const addOneDay = () => {
      const newDate = date.addToDate(viewDayState.value, { days: 1 });
      viewDayState.value = newDate;
    };

    const subtractOneDay = () => {
      const newDate = date.subtractFromDate(viewDayState.value, { days: 1 });
      viewDayState.value = newDate;
    };

    const setViewDay = (d: Date) => {
      viewDayState.value = d;
    };

    const setToToday = () => {
      viewDayState.value = new Date();
    };

    const setDateToTime = (
      d: string,
      t: string,
      dateMask = formats.date.ita,
      timeMask = formats.time.hhmm
    ) => {
      const dateValue = date.extractDate(d, dateMask);
      const datetime = date.extractDate(t, timeMask);
      datetime.setFullYear(dateValue.getFullYear());
      datetime.setMonth(dateValue.getMonth());
      datetime.setDate(dateValue.getDate());

      return datetime.toISOString();
    };

    const isoFormat = (d: string, f: string) => {
      return date.extractDate(d, f).toISOString();
    };

    const format = (d: string, inputFormat: string, outputFormat: string) => {
      const extractedDate = date.extractDate(d, inputFormat);
      const formattedDate = date.formatDate(extractedDate, outputFormat);
      return extractedDate ? formattedDate : '';
    };

    watch(viewDay, async () => {
      if (
        $route.params.date &&
        $route.params.date.toString() != viewDay.value.iso
      ) {
        $router.push({ path: `/reservations/date/${viewDay.value.iso}` });
        await tourDaysStore.list();
      }
    });

    return {
      viewDayState,
      viewDay,
      viewDayDate,
      formats,

      addOneDay,
      subtractOneDay,
      setViewDay,
      setToToday,
      setDateToTime,
      isoFormat,
      format,
    };
  },
  { persist: { pick: ['viewDayState'] } }
);
